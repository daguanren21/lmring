import type { ChatModelCard } from '../types';

const siliconModels: ChatModelCard[] = [
  {
    id: 'Qwen/Qwen2.5-72B-Instruct',
    displayName: 'Qwen2.5 72B Instruct',
    description: 'Qwen2.5 72B 是阿里云通义千问系列的大参数版本。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.56,
      output: 0.56,
      currency: 'CNY',
    },
  },
  {
    id: 'Qwen/Qwen2.5-7B-Instruct',
    displayName: 'Qwen2.5 7B Instruct',
    description: 'Qwen2.5 7B 是高效的中型模型，性价比出色。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0,
      output: 0,
      currency: 'CNY',
    },
  },
  {
    id: 'deepseek-ai/DeepSeek-V2.5',
    displayName: 'DeepSeek V2.5',
    description: 'DeepSeek V2.5 是 SiliconFlow 提供的 DeepSeek 模型。',
    type: 'chat',
    contextWindowTokens: 65_536,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 1.33,
      output: 1.33,
      currency: 'CNY',
    },
  },
  {
    id: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
    displayName: 'Llama 3.1 70B',
    description: 'Meta Llama 3.1 70B 是开源大型语言模型。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.99,
      output: 0.99,
      currency: 'CNY',
    },
  },
  {
    id: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    displayName: 'Llama 3.1 8B',
    description: 'Meta Llama 3.1 8B 是轻量级开源模型。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0,
      output: 0,
      currency: 'CNY',
    },
  },
];

export default siliconModels;
