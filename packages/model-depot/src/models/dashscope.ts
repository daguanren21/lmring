import type { ChatModelCard } from '../types';

const dashscopeModels: ChatModelCard[] = [
  {
    id: 'qwen-max',
    displayName: 'Qwen Max',
    description: 'Qwen Max 是通义千问系列最强大的模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 20,
      output: 60,
      currency: 'CNY',
    },
  },
  {
    id: 'qwen-plus',
    displayName: 'Qwen Plus',
    description: 'Qwen Plus 在性能和成本之间取得平衡。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
  },
  {
    id: 'qwen-turbo',
    displayName: 'Qwen Turbo',
    description: 'Qwen Turbo 是快速、经济的选择。',
    type: 'chat',
    contextWindowTokens: 8_192,
    maxOutput: 2_048,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.3,
      output: 0.6,
      currency: 'CNY',
    },
  },
  {
    id: 'qwen-vl-max',
    displayName: 'Qwen VL Max',
    description: 'Qwen VL Max 是视觉理解能力最强的千问模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 20,
      output: 60,
      currency: 'CNY',
    },
  },
];

export default dashscopeModels;
