import { and, db, eq } from '@lmring/database';
import { apiKeys, userEnabledModels } from '@lmring/database/schema';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';
import { logError } from '@/libs/error-logging';

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * GET /api/settings/api-keys/[id]/enabled-models
 * Returns the raw enabled models data from userEnabledModels table
 * This endpoint returns the saved model states directly without relying on fetchAvailableModels
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return NextResponse.json(
        { error: 'UNAUTHORIZED', message: 'Authentication required' },
        { status: 401 },
      );
    }

    const userId = session.user.id;
    const { id: keyId } = await params;

    if (!uuidRegex.test(keyId)) {
      return NextResponse.json(
        { error: 'INVALID_ID', message: 'Invalid API key ID format' },
        { status: 400 },
      );
    }

    const [key] = await db
      .select({ id: apiKeys.id })
      .from(apiKeys)
      .where(and(eq(apiKeys.id, keyId), eq(apiKeys.userId, userId)))
      .limit(1);

    if (!key) {
      return NextResponse.json(
        { error: 'API_KEY_NOT_FOUND', message: 'API key configuration not found' },
        { status: 404 },
      );
    }

    const enabledModelsData = await db
      .select({
        modelId: userEnabledModels.modelId,
        enabled: userEnabledModels.enabled,
      })
      .from(userEnabledModels)
      .where(eq(userEnabledModels.apiKeyId, keyId));

    return NextResponse.json(
      {
        models: enabledModelsData,
      },
      { status: 200 },
    );
  } catch (error) {
    logError('Fetch enabled models error', error);

    return NextResponse.json(
      {
        error: 'INTERNAL_ERROR',
        message: 'Failed to fetch enabled models',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
