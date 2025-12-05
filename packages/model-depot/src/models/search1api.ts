import type { ChatModelCard } from '../types';

const search1apiChatModels: ChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek R1 70B Fast Online 是一款带有联网能力的快速推理模型，可根据需要自动搜索网络获取最新信息。',
    displayName: 'DeepSeek R1 70B Fast Online',
    enabled: true,
    id: 'deepseek-r1-70b-fast-online',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 65_536,
    description: 'DeepSeek R1 Online 是带有联网功能的完整推理模型。',
    displayName: 'DeepSeek R1 Online',
    id: 'deepseek-r1-online',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 65_536,
    description: 'DeepSeek V3 Online 是带有联网功能的高性能通用模型。',
    displayName: 'DeepSeek V3 Online',
    id: 'deepseek-v3-online',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
];

export const allModels = [...search1apiChatModels];

export default allModels;
