import type { ChatModelCard } from '../types';

const githubModels: ChatModelCard[] = [
  {
    id: 'openai/o4-mini',
    displayName: 'o4-mini',
    description: 'OpenAI最新小型推理模型，编程视觉任务高效高性能。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    pricing: {
      input: 1.1,
      output: 4.4,
    },
  },
  {
    id: 'openai/gpt-4.1',
    displayName: 'GPT-4.1',
    description: 'OpenAI复杂任务旗舰模型，跨领域问题解决能力强。',
    type: 'chat',
    contextWindowTokens: 1_047_576,
    maxOutput: 32_768,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 2,
      output: 8,
    },
  },
  {
    id: 'openai/gpt-4.1-mini',
    displayName: 'GPT-4.1 mini',
    description: 'GPT-4.1迷你版，智能速度成本平衡。',
    type: 'chat',
    contextWindowTokens: 1_047_576,
    maxOutput: 32_768,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 0.4,
      output: 1.6,
    },
  },
  {
    id: 'openai/o3-mini',
    displayName: 'o3-mini',
    description: 'OpenAI最新小型推理模型，与o1-mini同成本延迟提供高智能。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      input: 1.1,
      output: 4.4,
    },
  },
  {
    id: 'openai/o1',
    displayName: 'o1',
    description: 'OpenAI推理模型，支持图文输入，适合复杂任务。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      input: 15,
      output: 60,
    },
  },
  {
    id: 'openai/gpt-4o',
    displayName: 'GPT-4o',
    description: 'OpenAI GPT-4系列最先进多模态模型。',
    type: 'chat',
    contextWindowTokens: 134_144,
    maxOutput: 16_384,
    abilities: {
      functionCall: true,
      vision: true,
    },
  },
  {
    id: 'openai/gpt-4o-mini',
    displayName: 'GPT-4o mini',
    description: 'OpenAI经济高效AI解决方案，适用多种任务。',
    type: 'chat',
    contextWindowTokens: 134_144,
    maxOutput: 4096,
    abilities: {
      functionCall: true,
      vision: true,
    },
  },
  {
    id: 'xai/grok-3',
    displayName: 'Grok 3',
    description: 'xAI Grok 3模型，支持函数调用。',
    type: 'chat',
    contextWindowTokens: 134_144,
    maxOutput: 4096,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'deepseek/DeepSeek-R1',
    displayName: 'DeepSeek R1',
    description: 'DeepSeek推理模型，GitHub托管版本。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4096,
    abilities: {
      reasoning: true,
    },
  },
  {
    id: 'deepseek/DeepSeek-V3-0324',
    displayName: 'DeepSeek V3',
    description: 'DeepSeek V3通用模型，GitHub托管版本。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4096,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'meta/Llama-3.3-70B-Instruct',
    displayName: 'Llama 3.3 70B Instruct',
    description: 'Meta Llama 3.3多语言开源模型，性能媲美405B。',
    type: 'chat',
    contextWindowTokens: 32_768,
    enabled: true,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'meta/Meta-Llama-3.1-405B-Instruct',
    displayName: 'Meta Llama 3.1 405B',
    description: 'Meta Llama 3.1最大版本，GitHub托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4096,
  },
  {
    id: 'mistral-ai/Mistral-Large-2411',
    displayName: 'Mistral Large',
    description: 'Mistral旗舰模型，适合复杂任务和代码生成。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4096,
  },
  {
    id: 'microsoft/Phi-4',
    displayName: 'Phi 4',
    description: 'Microsoft Phi-4模型，16K上下文。',
    type: 'chat',
    contextWindowTokens: 16_384,
    maxOutput: 16_384,
  },
];

export default githubModels;
