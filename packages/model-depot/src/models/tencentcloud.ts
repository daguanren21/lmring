import type { ChatModelCard } from '../types';

const tencentcloudChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 是一款性能卓越的通用大语言模型，在腾讯云知识引擎平台提供服务。',
    displayName: 'DeepSeek V3',
    enabled: true,
    id: 'deepseek-v3',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description: 'DeepSeek R1 是一款深度推理模型，擅长复杂问题分析和逻辑推理。',
    displayName: 'DeepSeek R1',
    enabled: true,
    id: 'deepseek-r1',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Qwen 32B 是蒸馏优化后的推理模型。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-r1-distill-qwen-32b',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: 'Qwen2.5 72B Instruct 是阿里通义千问的旗舰指令模型。',
    displayName: 'Qwen2.5 72B Instruct',
    id: 'qwen2.5-72b-instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen2.5 32B Instruct 提供平衡的性能与成本。',
    displayName: 'Qwen2.5 32B Instruct',
    id: 'qwen2.5-32b-instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'Llama 3.1 70B Instruct 是 Meta 的高性能开源语言模型。',
    displayName: 'Llama 3.1 70B Instruct',
    id: 'llama-3.1-70b-instruct',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description: '混元大模型是腾讯自研的通用大语言模型，具备强大的中文理解能力。',
    displayName: 'Hunyuan Turbo',
    id: 'hunyuan-turbo',
    type: 'chat',
  },
];

export const allModels = [...tencentcloudChatModels];

export default allModels;
