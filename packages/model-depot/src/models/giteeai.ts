import type { ChatModelCard } from '../types';

const giteeaiChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5-72B-Instruct 是通义千问团队开发的大规模语言模型，拥有卓越的语言理解和生成能力。',
    displayName: 'Qwen2.5 72B Instruct',
    enabled: true,
    id: 'Qwen2.5-72B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen2.5 32B Instruct 是一款性能优异的中等规模指令遵循模型。',
    displayName: 'Qwen2.5 32B Instruct',
    id: 'Qwen2.5-32B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen2.5 14B Instruct 适用于多种日常任务场景。',
    displayName: 'Qwen2.5 14B Instruct',
    id: 'Qwen2.5-14B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: 'Qwen2.5 7B Instruct 是一款轻量高效的语言模型。',
    displayName: 'Qwen2.5 7B Instruct',
    id: 'Qwen2.5-7B-Instruct',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description: 'DeepSeek R1 是 DeepSeek 推出的具备深度推理能力的先进模型。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'DeepSeek-R1',
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 是 DeepSeek 开发的高性能通用语言模型。',
    displayName: 'DeepSeek V3',
    enabled: true,
    id: 'DeepSeek-V3',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Llama 3.1 70B Instruct 是 Meta 开发的大规模开源语言模型。',
    displayName: 'Llama 3.1 70B Instruct',
    id: 'Llama-3.1-70B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 8B Instruct 是一款轻量级的指令遵循模型。',
    displayName: 'Llama 3.1 8B Instruct',
    id: 'Llama-3.1-8B-Instruct',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description: 'GLM-4-9B-Chat 是智谱 AI 开发的开源对话模型。',
    displayName: 'GLM-4 9B Chat',
    id: 'glm-4-9b-chat',
    type: 'chat',
  },
];

export const allModels = [...giteeaiChatModels];

export default allModels;
