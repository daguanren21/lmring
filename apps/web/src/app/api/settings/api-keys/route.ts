import { db } from '@lmring/database';
import { apiKeys } from '@lmring/database/schema';
import { and, eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';
import { decryptApiKey, encryptApiKey, maskApiKey } from '@/libs/encryption';

export async function GET(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    const keys = await db
      .select({
        id: apiKeys.id,
        providerName: apiKeys.providerName,
        configSource: apiKeys.configSource,
        createdAt: apiKeys.createdAt,
        updatedAt: apiKeys.updatedAt,
      })
      .from(apiKeys)
      .where(eq(apiKeys.userId, userId));

    return NextResponse.json({ keys }, { status: 200 });
  } catch (error) {
    console.error('Get API keys error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const body = (await request.json()) as {
      providerName: string;
      apiKey: string;
    };

    if (!body.providerName || !body.apiKey) {
      return NextResponse.json(
        { error: 'Provider name and API key are required' },
        { status: 400 },
      );
    }

    const existing = await db
      .select()
      .from(apiKeys)
      .where(and(eq(apiKeys.userId, userId), eq(apiKeys.providerName, body.providerName)))
      .limit(1);

    const encryptedKey = encryptApiKey(body.apiKey);

    if (existing.length > 0) {
      await db
        .update(apiKeys)
        .set({
          encryptedKey,
          updatedAt: new Date(),
        })
        .where(eq(apiKeys.id, existing[0]!.id));

      return NextResponse.json(
        {
          message: 'API key updated successfully',
          id: existing[0]!.id,
          providerName: body.providerName,
        },
        { status: 200 },
      );
    }

    const [newKey] = await db
      .insert(apiKeys)
      .values({
        userId,
        providerName: body.providerName,
        encryptedKey,
        configSource: 'manual',
      })
      .returning();

    return NextResponse.json(
      {
        message: 'API key added successfully',
        id: newKey!.id,
        providerName: body.providerName,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Add API key error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(request.url);
    const keyId = searchParams.get('id');

    if (!keyId) {
      return NextResponse.json({ error: 'Key ID is required' }, { status: 400 });
    }

    const [existing] = await db
      .select()
      .from(apiKeys)
      .where(and(eq(apiKeys.id, keyId), eq(apiKeys.userId, userId)))
      .limit(1);

    if (!existing) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 });
    }

    await db.delete(apiKeys).where(eq(apiKeys.id, keyId));

    return NextResponse.json({ message: 'API key deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Delete API key error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
