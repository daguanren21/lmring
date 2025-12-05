import type { ChatModelCard } from '../types';

const groqModels: ChatModelCard[] = [
  {
    id: 'groq/compound',
    displayName: 'Compound',
    description: 'Groq复合AI系统，智能调用多种模型来回答查询。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8192,
    enabled: true,
  },
  {
    id: 'moonshotai/kimi-k2-instruct-0905',
    displayName: 'Kimi K2 0905',
    description: 'Kimi K2预览版，256k上下文，具备强大的Agentic Coding能力。',
    type: 'chat',
    contextWindowTokens: 262_144,
    maxOutput: 16_384,
    enabled: true,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 1,
      output: 3,
    },
  },
  {
    id: 'meta-llama/llama-4-scout-17b-16e-instruct',
    displayName: 'Llama 4 Scout (17Bx16E)',
    description: 'Meta Llama 4 Scout模型，MoE架构。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8192,
    enabled: true,
    pricing: {
      input: 0.11,
      output: 0.34,
    },
  },
  {
    id: 'meta-llama/llama-4-maverick-17b-128e-instruct',
    displayName: 'Llama 4 Maverick (17Bx128E)',
    description: 'Meta Llama 4 Maverick模型，大规模MoE架构。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 8192,
    enabled: true,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.2,
      output: 0.6,
    },
  },
  {
    id: 'qwen/qwen3-32b',
    displayName: 'Qwen3 32B',
    description: 'Qwen3 32B模型，支持推理能力。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 40_960,
    abilities: {
      reasoning: true,
    },
    pricing: {
      input: 0.29,
      output: 0.59,
    },
  },
  {
    id: 'llama-3.1-8b-instant',
    displayName: 'Llama 3.1 8B Instant',
    description: 'Llama 3.1 8B高效模型，适合低成本大规模应用。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 131_072,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.05,
      output: 0.08,
    },
  },
  {
    id: 'llama-3.3-70b-versatile',
    displayName: 'Llama 3.3 70B Versatile',
    description: 'Meta Llama 3.3 70B多语言大模型，性能媲美405B。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 32_768,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.59,
      output: 0.79,
    },
  },
  {
    id: 'mistral-saba-24b',
    displayName: 'Mistral Saba 24B',
    description: 'Mistral Saba 24B模型，支持32k上下文。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 32_768,
    pricing: {
      input: 0.79,
      output: 0.79,
    },
  },
];

export default groqModels;
