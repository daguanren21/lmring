import { ProviderBuilder } from '@lmring/ai-hub';

export type SupportedProvider =
  | 'openai'
  | 'anthropic'
  | 'deepseek'
  | 'mistral'
  | 'xai'
  | 'openrouter'
  | 'google'
  | 'cohere'
  | 'together'
  | 'perplexity';

const COMPATIBLE_PROVIDERS: Record<string, string> = {
  google: 'https://generativelanguage.googleapis.com/v1beta/openai/',
  cohere: 'https://api.cohere.ai/v1',
  together: 'https://api.together.xyz/v1',
  perplexity: 'https://api.perplexity.ai',
};

export function createProvider(
  providerId: SupportedProvider,
  apiKey: string,
): ReturnType<typeof ProviderBuilder.openai> {
  // Native providers
  switch (providerId) {
    case 'openai':
      return ProviderBuilder.openai(apiKey);
    case 'anthropic':
      return ProviderBuilder.anthropic(apiKey);
    case 'deepseek':
      return ProviderBuilder.deepseek(apiKey);
    case 'mistral':
      return ProviderBuilder.mistral(apiKey);
    case 'xai':
      return ProviderBuilder.xai(apiKey);
    case 'openrouter':
      return ProviderBuilder.openrouter(apiKey);
  }

  // Compatible providers with custom base URLs
  const baseUrl = COMPATIBLE_PROVIDERS[providerId];
  if (baseUrl) {
    return ProviderBuilder.compatible(providerId, apiKey, baseUrl);
  }

  throw new Error(`Unsupported provider: ${providerId}`);
}

export interface ProviderConfig {
  provider: ReturnType<typeof ProviderBuilder.openai>;
  model: string;
  options: {
    temperature?: number;
    maxTokens?: number;
    topP?: number;
  };
}

export function createProviderConfigs(
  models: Array<{
    providerId: SupportedProvider;
    modelId: string;
    apiKey: string;
    options?: {
      temperature?: number;
      maxTokens?: number;
      topP?: number;
    };
  }>,
): ProviderConfig[] {
  return models.map((model) => ({
    provider: createProvider(model.providerId, model.apiKey),
    model: model.modelId,
    options: model.options || {},
  }));
}
