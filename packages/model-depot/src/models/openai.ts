import type { ChatModelCard } from '../types';

const openaiModels: ChatModelCard[] = [
  {
    id: 'gpt-4o',
    displayName: 'GPT-4o',
    description: 'GPT-4o 是 OpenAI 的旗舰多模态模型，支持文本和图像输入，适合各种复杂任务。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 16_384,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
      search: true,
    },
    pricing: {
      input: 2.5,
      output: 10,
      cachedInput: 1.25,
    },
    releasedAt: '2024-05-13',
  },
  {
    id: 'gpt-4o-mini',
    displayName: 'GPT-4o Mini',
    description: 'GPT-4o mini 是性价比最高的小型模型，在聊天偏好上排名高于 GPT-4。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 16_384,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
      search: true,
    },
    pricing: {
      input: 0.15,
      output: 0.6,
      cachedInput: 0.075,
    },
    releasedAt: '2024-07-18',
  },

  {
    id: 'gpt-4.1',
    displayName: 'GPT-4.1',
    description: 'GPT-4.1 是用于复杂任务的旗舰模型，适合跨领域解决问题。',
    type: 'chat',
    contextWindowTokens: 1_047_576,
    maxOutput: 32_768,
    abilities: {
      functionCall: true,
      vision: true,
      search: true,
    },
    pricing: {
      input: 2,
      output: 8,
      cachedInput: 0.5,
    },
    releasedAt: '2025-04-14',
  },
  {
    id: 'gpt-4.1-mini',
    displayName: 'GPT-4.1 mini',
    description: 'GPT-4.1 mini 提供了智能、速度和成本之间的平衡。',
    type: 'chat',
    contextWindowTokens: 1_047_576,
    maxOutput: 32_768,
    abilities: {
      functionCall: true,
      vision: true,
      search: true,
    },
    pricing: {
      input: 0.4,
      output: 1.6,
      cachedInput: 0.1,
    },
    releasedAt: '2025-04-14',
  },
  {
    id: 'gpt-4.1-nano',
    displayName: 'GPT-4.1 nano',
    description: 'GPT-4.1 nano 是最快、最具成本效益的 GPT-4.1 模型。',
    type: 'chat',
    contextWindowTokens: 1_047_576,
    maxOutput: 32_768,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 0.1,
      output: 0.4,
      cachedInput: 0.025,
    },
    releasedAt: '2025-04-14',
  },

  {
    id: 'o3',
    displayName: 'o3',
    description: 'o3 是全能强大的推理模型，在数学、科学、编程和视觉推理任务树立新标杆。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
      search: true,
    },
    pricing: {
      input: 2,
      output: 8,
      cachedInput: 0.5,
    },
    releasedAt: '2025-04-16',
  },
  {
    id: 'o3-mini',
    displayName: 'o3-mini',
    description: 'o3-mini 是最新的小型推理模型，在相同成本下提供高智能。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    pricing: {
      input: 1.1,
      output: 4.4,
      cachedInput: 0.55,
    },
    releasedAt: '2025-01-31',
  },
  {
    id: 'o4-mini',
    displayName: 'o4-mini',
    description: 'o4-mini 专为快速有效推理优化，在编码和视觉任务中表现出极高效率。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
      search: true,
    },
    pricing: {
      input: 1.1,
      output: 4.4,
      cachedInput: 0.275,
    },
    releasedAt: '2025-04-17',
  },
  {
    id: 'o1',
    displayName: 'o1',
    description: 'o1 是新的推理模型，支持图文输入，适用于需要复杂推理的任务。',
    type: 'chat',
    contextWindowTokens: 200_000,
    maxOutput: 100_000,
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    pricing: {
      input: 15,
      output: 60,
      cachedInput: 7.5,
    },
    releasedAt: '2024-12-17',
  },

  {
    id: 'gpt-4-turbo',
    displayName: 'GPT-4 Turbo',
    description: 'GPT-4 Turbo 是增强版本，为多模态任务提供成本效益高的支持。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 10,
      output: 30,
    },
    releasedAt: '2024-04-09',
  },

  {
    id: 'gpt-3.5-turbo',
    displayName: 'GPT-3.5 Turbo',
    description: 'GPT-3.5 Turbo 适用于各种文本生成和理解任务。',
    type: 'chat',
    contextWindowTokens: 16_385,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.5,
      output: 1.5,
    },
  },
];

export default openaiModels;
