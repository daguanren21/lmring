import type { ChatModelCard } from '../types';

const stepfunModels: ChatModelCard[] = [
  {
    id: 'step-1-128k',
    displayName: 'Step 1 128K',
    description: 'Step 1 128K 支持超长上下文，适合复杂任务。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 60,
      output: 150,
      currency: 'CNY',
    },
  },
  {
    id: 'step-1-32k',
    displayName: 'Step 1 32K',
    description: 'Step 1 32K 是平衡上下文和成本的选择。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 24,
      output: 60,
      currency: 'CNY',
    },
  },
  {
    id: 'step-1v-32k',
    displayName: 'Step 1V 32K',
    description: 'Step 1V 32K 支持视觉理解。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 24,
      output: 60,
      currency: 'CNY',
    },
  },
  {
    id: 'step-2-16k',
    displayName: 'Step 2 16K',
    description: 'Step 2 16K 是新一代模型，性能更强。',
    type: 'chat',
    contextWindowTokens: 16_384,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 38,
      output: 120,
      currency: 'CNY',
    },
  },
];

export default stepfunModels;
