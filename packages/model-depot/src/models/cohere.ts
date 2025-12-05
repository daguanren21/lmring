import type { ChatModelCard } from '../types';

const cohereModels: ChatModelCard[] = [
  {
    id: 'command-a-03-2025',
    displayName: 'Command A 2503',
    description: 'Cohere最强模型，工具使用、代理、RAG和多语言表现出色。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 8000,
    enabled: true,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 2.5,
      output: 10,
    },
  },
  {
    id: 'command-r-plus-08-2024',
    displayName: 'Command R+ 2408',
    description: 'Command R+增强版，适合复杂RAG和多步工具使用。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4000,
    enabled: true,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 2.5,
      output: 10,
    },
  },
  {
    id: 'command-r-08-2024',
    displayName: 'Command R 2408',
    description: 'Command R更新版，适合代码生成、RAG和工具使用。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4000,
    enabled: true,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.15,
      output: 0.6,
    },
  },
  {
    id: 'command-r7b-12-2024',
    displayName: 'Command R7B 2412',
    description: 'Command R7B小型高效模型，擅长复杂推理和工具调用。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4000,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.0375,
      output: 0.15,
    },
  },
  {
    id: 'c4ai-aya-expanse-32b',
    displayName: 'Aya Expanse 32B',
    description: 'Aya高性能多语言模型，支持23种语言。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4000,
    enabled: true,
    pricing: {
      input: 0.5,
      output: 1.5,
    },
  },
  {
    id: 'c4ai-aya-expanse-8b',
    displayName: 'Aya Expanse 8B',
    description: 'Aya轻量级多语言模型，支持23种语言。',
    type: 'chat',
    contextWindowTokens: 8000,
    maxOutput: 4000,
    enabled: true,
    pricing: {
      input: 0.5,
      output: 1.5,
    },
  },
  {
    id: 'c4ai-aya-vision-32b',
    displayName: 'Aya Vision 32B',
    description: 'Aya多模态模型，支持图像理解和23种语言。',
    type: 'chat',
    contextWindowTokens: 16_000,
    maxOutput: 4000,
    enabled: true,
    abilities: {
      vision: true,
    },
    pricing: {
      input: 0.5,
      output: 1.5,
    },
  },
  {
    id: 'c4ai-aya-vision-8b',
    displayName: 'Aya Vision 8B',
    description: 'Aya轻量级视觉模型，低延迟最佳性能。',
    type: 'chat',
    contextWindowTokens: 16_000,
    maxOutput: 4000,
    enabled: true,
    abilities: {
      vision: true,
    },
    pricing: {
      input: 0.5,
      output: 1.5,
    },
  },
];

export default cohereModels;
