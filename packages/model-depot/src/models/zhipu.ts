import type { ChatModelCard } from '../types';

const zhipuModels: ChatModelCard[] = [
  {
    id: 'glm-4-plus',
    displayName: 'GLM-4 Plus',
    description: 'GLM-4 Plus 是智谱 AI 最强大的模型，支持超长上下文。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 50,
      output: 50,
      currency: 'CNY',
    },
  },
  {
    id: 'glm-4-0520',
    displayName: 'GLM-4 0520',
    description: 'GLM-4 0520 是高性能通用模型。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 100,
      output: 100,
      currency: 'CNY',
    },
  },
  {
    id: 'glm-4-flash',
    displayName: 'GLM-4 Flash',
    description: 'GLM-4 Flash 是快速、经济的选择。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.1,
      output: 0.1,
      currency: 'CNY',
    },
  },
  {
    id: 'glm-4v-plus',
    displayName: 'GLM-4V Plus',
    description: 'GLM-4V Plus 是多模态视觉理解模型。',
    type: 'chat',
    contextWindowTokens: 8_192,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 10,
      output: 10,
      currency: 'CNY',
    },
  },
];

export default zhipuModels;
