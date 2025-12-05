import type { ChatModelCard } from '../types';

const yiModels: ChatModelCard[] = [
  {
    id: 'yi-large',
    displayName: 'Yi Large',
    description: 'Yi Large 是零一万物最强大的模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 20,
      output: 20,
      currency: 'CNY',
    },
  },
  {
    id: 'yi-medium',
    displayName: 'Yi Medium',
    description: 'Yi Medium 在性能和成本之间取得平衡。',
    type: 'chat',
    contextWindowTokens: 16_384,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 2.5,
      output: 2.5,
      currency: 'CNY',
    },
  },
  {
    id: 'yi-spark',
    displayName: 'Yi Spark',
    description: 'Yi Spark 是快速、轻量的模型。',
    type: 'chat',
    contextWindowTokens: 16_384,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 1,
      output: 1,
      currency: 'CNY',
    },
  },
  {
    id: 'yi-large-turbo',
    displayName: 'Yi Large Turbo',
    description: 'Yi Large Turbo 是 Yi Large 的快速版本。',
    type: 'chat',
    contextWindowTokens: 16_384,
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
    id: 'yi-vision',
    displayName: 'Yi Vision',
    description: 'Yi Vision 支持图像理解和视觉分析。',
    type: 'chat',
    contextWindowTokens: 16_384,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 6,
      output: 6,
      currency: 'CNY',
    },
  },
];

export default yiModels;
