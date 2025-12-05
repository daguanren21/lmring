import type { ChatModelCard } from '../types';

const infiniaiChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 8B 是通义千问 3 系列的轻量级模型，提供出色的性能表现。',
    displayName: 'Qwen3 8B',
    enabled: true,
    id: 'qwen3-8b',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 32B 是一款中等规模的高性能模型。',
    displayName: 'Qwen3 32B',
    id: 'qwen3-32b',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description: 'DeepSeek R1 是一款具备强大推理能力的先进模型。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'deepseek-r1',
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 是一款高性能的通用语言模型。',
    displayName: 'DeepSeek V3',
    enabled: true,
    id: 'deepseek-v3',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 70B Instruct 是 Meta 的大规模开源语言模型。',
    displayName: 'Llama 3.1 70B Instruct',
    id: 'llama-3.1-70b-instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 8B Instruct 是一款轻量高效的指令模型。',
    displayName: 'Llama 3.1 8B Instruct',
    id: 'llama-3.1-8b-instruct',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description: 'GLM-4 是智谱 AI 的旗舰对话模型。',
    displayName: 'GLM-4',
    id: 'glm-4',
    type: 'chat',
  },
];

export const allModels = [...infiniaiChatModels];

export default allModels;
