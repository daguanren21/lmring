/**
 * Shared types for Arena components
 */

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  description?: string;
  category?: string;
  icon?: string;
  context?: string;
  inputPricing?: string;
  outputPricing?: string;
  badge?: 'Hobby' | 'Pro' | 'Enterprise';
  isPremium?: boolean;
  isNew?: boolean;
}

export interface ModelConfig {
  maxTokens: number;
  temperature: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
}
