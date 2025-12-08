import { getDefaultProviderUrl } from '@lmring/ai-hub';
import { and, db, encrypt, eq } from '@lmring/database';
import { apiKeys } from '@lmring/database/schema';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';
import { logError } from '@/libs/error-logging';
import { apiKeySchema } from '@/libs/validation';

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
        proxyUrl: apiKeys.proxyUrl,
        enabled: apiKeys.enabled,
        configSource: apiKeys.configSource,
        createdAt: apiKeys.createdAt,
        updatedAt: apiKeys.updatedAt,
        encryptedKey: apiKeys.encryptedKey,
        isCustom: apiKeys.isCustom,
        providerType: apiKeys.providerType,
      })
      .from(apiKeys)
      .where(eq(apiKeys.userId, userId));

    const keysWithDefaults = keys.map((key) => ({
      id: key.id,
      providerName: key.providerName,
      proxyUrl: key.proxyUrl ?? getDefaultProviderUrl(key.providerName),
      enabled: key.enabled,
      configSource: key.configSource,
      createdAt: key.createdAt,
      updatedAt: key.updatedAt,
      hasApiKey: Boolean(key.encryptedKey),
      isCustom: key.isCustom,
      providerType: key.providerType,
    }));

    return NextResponse.json({ keys: keysWithDefaults }, { status: 200 });
  } catch (error) {
    logError('Get API keys error', error);
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
    const rawBody = await request.json();

    const validationResult = apiKeySchema.safeParse(rawBody);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 },
      );
    }

    const body = validationResult.data;

    const existing = await db
      .select()
      .from(apiKeys)
      .where(and(eq(apiKeys.userId, userId), eq(apiKeys.providerName, body.providerName)))
      .limit(1);

    const encryptedKey = body.apiKey ? encrypt(body.apiKey) : null;

    const proxyUrlToStore = body.proxyUrl?.trim() || null;

    const enabledValue = body.enabled ?? false;

    const [existingKey] = existing;
    if (existingKey) {
      const updateData: {
        proxyUrl: string | null;
        enabled: boolean;
        updatedAt: Date;
        encryptedKey?: string | null;
        isCustom?: boolean;
        providerType?: string | null;
      } = {
        proxyUrl: proxyUrlToStore,
        enabled: enabledValue,
        updatedAt: new Date(),
      };
      if (body.apiKey) {
        updateData.encryptedKey = encryptedKey;
      }
      if (body.isCustom !== undefined) {
        updateData.isCustom = body.isCustom;
      }
      if (body.providerType !== undefined) {
        updateData.providerType = body.providerType;
      }

      const [updated] = await db
        .update(apiKeys)
        .set(updateData)
        .where(eq(apiKeys.id, existingKey.id))
        .returning();

      return NextResponse.json(
        {
          message: 'Provider updated successfully',
          id: existingKey.id,
          providerName: body.providerName,
          proxyUrl: proxyUrlToStore ?? getDefaultProviderUrl(body.providerName),
          enabled: updated?.enabled ?? enabledValue,
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
        proxyUrl: proxyUrlToStore,
        enabled: enabledValue,
        configSource: 'manual',
        isCustom: body.isCustom ?? false,
        providerType: body.providerType ?? null,
      })
      .returning();

    return NextResponse.json(
      {
        message: 'Provider added successfully',
        id: newKey?.id,
        providerName: body.providerName,
        proxyUrl: proxyUrlToStore ?? getDefaultProviderUrl(body.providerName),
        enabled: newKey?.enabled ?? enabledValue,
      },
      { status: 201 },
    );
  } catch (error) {
    logError('Add API key error', error);
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
    logError('Delete API key error', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
