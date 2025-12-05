import type { ChatModelCard } from '../types';

const sensenovaModels: ChatModelCard[] = [
  {
    id: 'SenseNova-V6-5-Pro',
    displayName: 'SenseNova V6.5 Pro',
    description: '商汤多模态推理模型，在OCR与IP识别等任务中表现卓越。',
    type: 'chat',
    contextWindowTokens: 131_072,
    enabled: true,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 3,
      output: 9,
    },
  },
  {
    id: 'SenseNova-V6-5-Turbo',
    displayName: 'SenseNova V6.5 Turbo',
    description: '商汤多模态模型高速版，性价比更高。',
    type: 'chat',
    contextWindowTokens: 131_072,
    enabled: true,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 1.5,
      output: 4.5,
    },
  },
  {
    id: 'SenseNova-V6-Reasoner',
    displayName: 'SenseNova V6 Reasoner',
    description: '商汤视觉语言深度推理模型，支持慢思考和完整思维链。',
    type: 'chat',
    contextWindowTokens: 32_768,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
  },
  {
    id: 'SenseNova-V6-Pro',
    displayName: 'SenseNova V6 Pro',
    description: '商汤原生统一多模态模型，OpenCompass和SuperCLUE双冠军。',
    type: 'chat',
    contextWindowTokens: 32_768,
    abilities: {
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 3,
      output: 9,
    },
  },
  {
    id: 'SenseChat-5',
    displayName: 'SenseChat 5.5',
    description: '商汤最新版本模型，128K上下文，比肩GPT-4o。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 131_072,
    abilities: {
      functionCall: true,
    },
    pricing: {
      currency: 'CNY',
      input: 8,
      output: 20,
    },
  },
  {
    id: 'SenseChat-Turbo',
    displayName: 'SenseChat 5.0 Turbo',
    description: '商汤快速问答模型，适用于快速问答和模型微调。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 32_768,
    abilities: {
      functionCall: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 0.6,
    },
  },
  {
    id: 'SenseChat-Vision',
    displayName: 'SenseChat 5.5 Vision',
    description: '商汤多模态模型，支持多图输入和视觉理解。',
    type: 'chat',
    contextWindowTokens: 16_384,
    maxOutput: 16_384,
    abilities: {
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 10,
      output: 60,
    },
  },
];

export default sensenovaModels;
