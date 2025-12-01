import { db } from '@lmring/database';
import { apiKeys } from '@lmring/database/schema';
import { and, eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';
import { decryptApiKey } from '@/libs/encryption';

export async function GET(request: Request, { params }: { params: { provider: string } }) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const providerName = params.provider;

    const [key] = await db
      .select()
      .from(apiKeys)
      .where(and(eq(apiKeys.userId, userId), eq(apiKeys.providerName, providerName)))
      .limit(1);

    if (!key) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 });
    }

    const decryptedKey = decryptApiKey(key.encryptedKey);

    return NextResponse.json(
      {
        id: key.id,
        providerName: key.providerName,
        apiKey: decryptedKey,
        configSource: key.configSource,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Get API key error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
