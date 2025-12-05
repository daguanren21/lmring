import type { ChatModelCard } from '../types';

const jinaChatModels: ChatModelCard[] = [
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 128_000,
    description:
      'Jina DeepSearch V1 是一款专为深度搜索设计的模型，能够进行多轮搜索和推理，提供全面准确的答案。',
    displayName: 'Jina DeepSearch V1',
    enabled: true,
    id: 'jina-deepsearch-v1',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
];

export const allModels = [...jinaChatModels];

export default allModels;
