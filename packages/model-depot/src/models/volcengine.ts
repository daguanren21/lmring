import type { ChatModelCard } from '../types';

const volcengineModels: ChatModelCard[] = [
  {
    id: 'doubao-seed-1.6',
    displayName: 'Doubao Seed 1.6',
    description: '豆包全新多模态深度思考模型，支持auto/thinking/non-thinking三种模式。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 32_000,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 8,
    },
  },
  {
    id: 'doubao-seed-1.6-thinking',
    displayName: 'Doubao Seed 1.6 Thinking',
    description: '豆包深度思考模型，在Coding、Math、逻辑推理上大幅提升。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 32_000,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 8,
    },
  },
  {
    id: 'doubao-seed-1.6-flash',
    displayName: 'Doubao Seed 1.6 Flash',
    description: '豆包极速多模态思考模型，TPOT仅需10ms。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 32_000,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.15,
      output: 1.5,
    },
  },
  {
    id: 'doubao-1.5-pro-32k',
    displayName: 'Doubao 1.5 Pro 32k',
    description: '豆包全新主力模型，在知识、代码、推理等方面表现卓越。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 16_384,
    abilities: {
      functionCall: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 2,
    },
  },
  {
    id: 'doubao-1.5-lite-32k',
    displayName: 'Doubao 1.5 Lite 32k',
    description: '豆包轻量版模型，极致响应速度，效果与时延均达一流水平。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 12_288,
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
    id: 'doubao-1.5-vision-pro-32k',
    displayName: 'Doubao 1.5 Vision Pro 32k',
    description: '豆包多模态大模型，支持任意分辨率图像识别。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 12_288,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 3,
      output: 9,
    },
  },
  {
    id: 'doubao-1.5-thinking-pro',
    displayName: 'Doubao 1.5 Thinking Pro',
    description: '豆包深度思考模型，在数学、编程、科学推理等领域表现突出。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 16_000,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
  },
  {
    id: 'doubao-pro-32k',
    displayName: 'Doubao Pro 32k',
    description: '豆包效果最好的主力模型，适合处理复杂任务。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 2,
    },
  },
  {
    id: 'doubao-lite-32k',
    displayName: 'Doubao Lite 32k',
    description: '豆包轻量模型，极致响应速度，高性价比。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      input: 0.3,
      output: 0.6,
    },
  },
];

export default volcengineModels;
