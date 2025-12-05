import type { ChatModelCard } from '../types';

const qiniuChatModels: ChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description: 'DeepSeek R1 是 DeepSeek 推出的深度推理模型，在复杂问题求解方面表现卓越。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'deepseek-r1',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 是一款高性能通用语言模型，适合多种应用场景。',
    displayName: 'DeepSeek V3',
    enabled: true,
    id: 'deepseek-v3',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 8,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Qwen 32B 是经过蒸馏优化的推理模型。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-r1-distill-qwen-32b',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 4,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Llama 70B 是基于 Llama 架构的蒸馏推理模型。',
    displayName: 'DeepSeek R1 Distill Llama 70B',
    id: 'deepseek-r1-distill-llama-70b',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 8,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: 'Qwen2.5 72B Instruct 是通义千问的旗舰指令遵循模型。',
    displayName: 'Qwen2.5 72B Instruct',
    id: 'qwen2.5-72b-instruct',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen2.5 32B Instruct 提供优秀的性价比。',
    displayName: 'Qwen2.5 32B Instruct',
    id: 'qwen2.5-32b-instruct',
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 4,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 70B Instruct 是 Meta 的高性能开源模型。',
    displayName: 'Llama 3.1 70B Instruct',
    id: 'llama-3.1-70b-instruct',
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 6,
    },
    type: 'chat',
  },
];

export const allModels = [...qiniuChatModels];

export default allModels;
