import { ALL_PROVIDER_METADATA, type ProviderMetadata } from '@lmring/ai-hub/metadata';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

export interface ProviderWithDescription extends ProviderMetadata {
  description: string;
}

type ProviderDescriptionKey =
  | 'openai_description'
  | 'anthropic_description'
  | 'azure_description'
  | 'vertex_description'
  | 'xai_description'
  | 'deepseek_description'
  | 'mistral_description'
  | 'openrouter_description'
  | 'silicon_description'
  | 'dashscope_description'
  | 'zhipu_description'
  | 'baichuan_description'
  | 'moonshot_description'
  | 'yi_description'
  | 'minimax_description'
  | 'step_description'
  | 'ollama_description'
  | 'bedrock_description'
  | 'google_description';

export function useProviderMetadata(): ProviderWithDescription[] {
  const t = useTranslations('Providers');

  return useMemo(
    () =>
      ALL_PROVIDER_METADATA.map((p) => {
        const descriptionKey = `${p.id}_description` as ProviderDescriptionKey;
        return {
          ...p,
          description: t(descriptionKey),
        };
      }),
    [t],
  );
}
