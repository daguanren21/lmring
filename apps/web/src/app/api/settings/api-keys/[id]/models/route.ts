import { fetchAvailableModels, getDefaultProviderUrl, getProviderById } from '@lmring/ai-hub';
import { and, db, decrypt, eq } from '@lmring/database';
import { apiKeys, userEnabledModels } from '@lmring/database/schema';
import { NextResponse } from 'next/server';
import { auth } from '@/libs/Auth';
import { logError } from '@/libs/error-logging';
import { modelEnableSchema } from '@/libs/validation';

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

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

    // Get the API key configuration
    const [key] = await db
      .select()
      .from(apiKeys)
      .where(and(eq(apiKeys.id, keyId), eq(apiKeys.userId, userId)))
      .limit(1);

    if (!key) {
      return NextResponse.json(
        { error: 'API_KEY_NOT_FOUND', message: 'API key configuration not found' },
        { status: 404 },
      );
    }

    if (!key.encryptedKey) {
      return NextResponse.json(
        { error: 'NO_API_KEY', message: 'API key not configured for this provider' },
        { status: 400 },
      );
    }

    const decryptedKey = decrypt(key.encryptedKey);

    const baseUrl = key.proxyUrl ?? getDefaultProviderUrl(key.providerName);

    if (!baseUrl) {
      return NextResponse.json(
        {
          error: 'NO_BASE_URL',
          message: `No API URL configured for provider: ${key.providerName}`,
        },
        { status: 400 },
      );
    }

    const result = await fetchAvailableModels(key.providerName, decryptedKey, baseUrl);

    const enabledModelsData = await db
      .select({
        modelId: userEnabledModels.modelId,
        enabled: userEnabledModels.enabled,
      })
      .from(userEnabledModels)
      .where(eq(userEnabledModels.apiKeyId, keyId));

    const enabledModelsMap = new Map(enabledModelsData.map((m) => [m.modelId, m.enabled]));

    const modelsWithEnabledState = result.models.map((model) => ({
      ...model,
      enabled: enabledModelsMap.get(model.id) ?? true,
    }));

    const provider = getProviderById(key.providerName);
    const providerDisplayName = provider?.name ?? key.providerName;

    return NextResponse.json(
      {
        providerId: key.providerName,
        providerName: providerDisplayName,
        proxyUrl: baseUrl,
        models: modelsWithEnabledState,
        source: result.source,
      },
      { status: 200 },
    );
  } catch (error) {
    logError('Fetch models error', error);

    if (error instanceof Error && error.message.includes('401')) {
      return NextResponse.json(
        { error: 'INVALID_API_KEY', message: 'The API key is invalid or expired' },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        error: 'PROVIDER_ERROR',
        message: 'Failed to fetch models from provider',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
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

    const rawBody = await request.json();
    const validationResult = modelEnableSchema.safeParse(rawBody);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 },
      );
    }

    const { models } = validationResult.data;

    const [key] = await db
      .select()
      .from(apiKeys)
      .where(and(eq(apiKeys.id, keyId), eq(apiKeys.userId, userId)))
      .limit(1);

    if (!key) {
      return NextResponse.json(
        { error: 'API_KEY_NOT_FOUND', message: 'API key configuration not found' },
        { status: 404 },
      );
    }

    const now = new Date();
    for (const model of models) {
      await db
        .insert(userEnabledModels)
        .values({
          userId,
          apiKeyId: keyId,
          modelId: model.modelId,
          enabled: model.enabled,
          createdAt: now,
          updatedAt: now,
        })
        .onConflictDoUpdate({
          target: [userEnabledModels.apiKeyId, userEnabledModels.modelId],
          set: {
            enabled: model.enabled,
            updatedAt: now,
          },
        });
    }

    return NextResponse.json(
      {
        message: 'Model settings updated successfully',
        modelsUpdated: models.length,
      },
      { status: 200 },
    );
  } catch (error) {
    logError('Update models error', error);
    return NextResponse.json(
      {
        error: 'INTERNAL_ERROR',
        message: 'Failed to update model settings',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
