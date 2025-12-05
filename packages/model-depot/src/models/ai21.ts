import type { ChatModelCard } from '../types';

const ai21ChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 256_000,
    description:
      'Jamba 1.5 Large 是一款强大的指令调优模型，拥有 94B 激活参数和 398B 总参数，在长上下文处理方面表现出色。',
    displayName: 'Jamba 1.5 Large',
    enabled: true,
    id: 'jamba-1.5-large',
    pricing: {
      input: 2,
      output: 8,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 256_000,
    description:
      'Jamba 1.5 Mini 是一款紧凑高效的模型，拥有 12B 激活参数和 52B 总参数，在保持高质量输出的同时提供更快的推理速度。',
    displayName: 'Jamba 1.5 Mini',
    enabled: true,
    id: 'jamba-1.5-mini',
    pricing: {
      input: 0.2,
      output: 0.4,
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 256_000,
    description: 'Jamba Mini 是一款轻量级模型，专为快速响应和高效推理设计。',
    displayName: 'Jamba Mini',
    id: 'jamba-mini',
    pricing: {
      input: 0.2,
      output: 0.4,
    },
    type: 'chat',
  },
];

export const allModels = [...ai21ChatModels];

export default allModels;
