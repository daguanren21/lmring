import type { ChatModelCard } from '../types';

const ppioChatModels: ChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description: 'DeepSeek R1 是一款具备强大推理能力的先进模型，擅长处理复杂逻辑和数学问题。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'deepseek/deepseek-r1',
    pricing: {
      input: 0.55,
      output: 2.19,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 是一款高性能通用大语言模型，提供卓越的生成和理解能力。',
    displayName: 'DeepSeek V3',
    enabled: true,
    id: 'deepseek/deepseek-v3',
    pricing: {
      input: 0.27,
      output: 1.1,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Qwen 32B 是优化后的轻量级推理模型。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    enabled: true,
    id: 'deepseek/deepseek-r1-distill-qwen-32b',
    pricing: {
      input: 0.15,
      output: 0.6,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Llama 70B 是基于 Llama 架构的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Llama 70B',
    id: 'deepseek/deepseek-r1-distill-llama-70b',
    pricing: {
      input: 0.35,
      output: 1.4,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: 'Qwen2.5 72B Instruct 是通义千问的旗舰大模型。',
    displayName: 'Qwen2.5 72B Instruct',
    id: 'qwen/qwen2.5-72b-instruct',
    pricing: {
      input: 0.3,
      output: 0.9,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 70B Instruct 是 Meta 发布的高性能开源模型。',
    displayName: 'Llama 3.1 70B Instruct',
    id: 'meta-llama/llama-3.1-70b-instruct',
    pricing: {
      input: 0.35,
      output: 0.9,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 8B Instruct 是一款轻量高效的指令模型。',
    displayName: 'Llama 3.1 8B Instruct',
    id: 'meta-llama/llama-3.1-8b-instruct',
    pricing: {
      input: 0.06,
      output: 0.06,
    },
    type: 'chat',
  },
];

export const allModels = [...ppioChatModels];

export default allModels;
