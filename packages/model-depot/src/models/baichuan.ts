import type { ChatModelCard } from '../types';

const baichuanModels: ChatModelCard[] = [
  {
    id: 'Baichuan4',
    displayName: 'Baichuan 4',
    description: 'Baichuan 4 是百川 AI 最新一代大语言模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 100,
      output: 100,
      currency: 'CNY',
    },
  },
  {
    id: 'Baichuan3-Turbo',
    displayName: 'Baichuan 3 Turbo',
    description: 'Baichuan 3 Turbo 是快速、经济的选择。',
    type: 'chat',
    contextWindowTokens: 32_768,
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
  {
    id: 'Baichuan2-Turbo',
    displayName: 'Baichuan 2 Turbo',
    description: 'Baichuan 2 Turbo 提供稳定可靠的对话能力。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 8,
      output: 8,
      currency: 'CNY',
    },
  },
];

export default baichuanModels;
