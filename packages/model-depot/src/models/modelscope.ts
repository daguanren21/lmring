import type { ChatModelCard } from '../types';

const modelscopeChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3-4B 是通义千问团队开发的轻量级高效语言模型。',
    displayName: 'Qwen3 4B',
    enabled: true,
    id: 'Qwen/Qwen3-4B',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen2.5-72B-Instruct 是一款超大规模的指令遵循模型，具有出色的语言理解能力。',
    displayName: 'Qwen2.5 72B Instruct',
    id: 'Qwen/Qwen2.5-72B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen2.5-32B-Instruct 提供平衡的性能和效率。',
    displayName: 'Qwen2.5 32B Instruct',
    id: 'Qwen/Qwen2.5-32B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: 'Qwen2.5-7B-Instruct 是一款高效的中等规模语言模型。',
    displayName: 'Qwen2.5 7B Instruct',
    id: 'Qwen/Qwen2.5-7B-Instruct',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description: 'DeepSeek R1 具备强大的推理和思考能力。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-R1',
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 是一款高性能的通用大语言模型。',
    displayName: 'DeepSeek V3',
    id: 'deepseek-ai/DeepSeek-V3',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.3 70B Instruct 是 Meta 最新发布的大规模开源模型。',
    displayName: 'Llama 3.3 70B Instruct',
    id: 'LLM-Research/Llama-3.3-70B-Instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 8B Instruct 是一款轻量高效的指令模型。',
    displayName: 'Llama 3.1 8B Instruct',
    id: 'LLM-Research/Meta-Llama-3.1-8B-Instruct',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 8192,
    description: 'InternVL2-8B 是书生团队开发的多模态视觉语言模型。',
    displayName: 'InternVL2 8B',
    id: 'OpenGVLab/InternVL2-8B',
    type: 'chat',
  },
];

export const allModels = [...modelscopeChatModels];

export default allModels;
