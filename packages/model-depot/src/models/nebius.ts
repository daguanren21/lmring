import type { ChatModelCard } from '../types';

const nebiusModels: ChatModelCard[] = [
  {
    id: 'moonshotai/Kimi-K2-Instruct',
    displayName: 'Kimi-K2-Instruct',
    description: 'Moonshot Kimi K2模型，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.5,
      output: 2.4,
    },
  },
  {
    id: 'openai/gpt-oss-120b',
    displayName: 'GPT OSS 120B',
    description: 'OpenAI开源120B模型，Nebius高速托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      input: 0.15,
      output: 0.6,
    },
  },
  {
    id: 'deepseek-ai/DeepSeek-R1-0528',
    displayName: 'DeepSeek R1 0528',
    description: 'DeepSeek R1最新版，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 163_840,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      input: 0.8,
      output: 2.4,
    },
  },
  {
    id: 'deepseek-ai/DeepSeek-V3-0324',
    displayName: 'DeepSeek V3 0324',
    description: 'DeepSeek V3最新版，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 163_840,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.5,
      output: 1.5,
    },
  },
  {
    id: 'Qwen/Qwen3-235B-A22B-Instruct-2507',
    displayName: 'Qwen3 235B Instruct',
    description: 'Qwen3 235B大模型，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 262_144,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.2,
      output: 0.6,
    },
  },
  {
    id: 'Qwen/Qwen3-32B',
    displayName: 'Qwen3 32B',
    description: 'Qwen3 32B模型，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 40_960,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      input: 0.1,
      output: 0.3,
    },
  },
  {
    id: 'meta-llama/Llama-3.3-70B-Instruct',
    displayName: 'Llama 3.3 70B Instruct',
    description: 'Meta Llama 3.3 70B，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.13,
      output: 0.4,
    },
  },
  {
    id: 'meta-llama/Meta-Llama-3.1-405B-Instruct',
    displayName: 'Llama 3.1 405B Instruct',
    description: 'Meta Llama 3.1 405B，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 1,
      output: 3,
    },
  },
  {
    id: 'Qwen/Qwen2.5-72B-Instruct',
    displayName: 'Qwen2.5 72B Instruct',
    description: 'Qwen2.5 72B模型，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.13,
      output: 0.4,
    },
  },
  {
    id: 'Qwen/QwQ-32B',
    displayName: 'QwQ 32B',
    description: 'Qwen QwQ推理模型，Nebius托管。',
    type: 'chat',
    contextWindowTokens: 131_072,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      input: 0.15,
      output: 0.45,
    },
  },
];

export default nebiusModels;
