import type { ChatModelCard } from '../types';

const moonshotModels: ChatModelCard[] = [
  {
    id: 'moonshot-v1-128k',
    displayName: 'Moonshot V1 128K',
    description: 'Moonshot V1 128K 支持超长上下文，适合长文档处理。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 60,
      output: 60,
      currency: 'CNY',
    },
  },
  {
    id: 'moonshot-v1-32k',
    displayName: 'Moonshot V1 32K',
    description: 'Moonshot V1 32K 是平衡上下文和成本的选择。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 24,
      output: 24,
      currency: 'CNY',
    },
  },
  {
    id: 'moonshot-v1-8k',
    displayName: 'Moonshot V1 8K',
    description: 'Moonshot V1 8K 是经济实惠的基础版本。',
    type: 'chat',
    contextWindowTokens: 8_192,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 12,
      output: 12,
      currency: 'CNY',
    },
  },
];

export default moonshotModels;
