import type { ChatModelCard } from '../types';

const upstageModels: ChatModelCard[] = [
  {
    id: 'solar-pro',
    displayName: 'Solar Pro',
    description: 'Upstage Solar Pro大语言模型，性能出色。',
    type: 'chat',
    contextWindowTokens: 4096,
    enabled: true,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'solar-mini',
    displayName: 'Solar Mini',
    description: 'Upstage Solar Mini轻量模型，快速响应。',
    type: 'chat',
    contextWindowTokens: 4096,
    abilities: {
      functionCall: true,
    },
  },
];

export default upstageModels;
