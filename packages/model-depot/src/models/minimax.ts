import type { ChatModelCard } from '../types';

const minimaxModels: ChatModelCard[] = [
  {
    id: 'abab6.5s-chat',
    displayName: 'ABAB 6.5s Chat',
    description: 'ABAB 6.5s 是 MiniMax 的旗舰模型，支持超长上下文。',
    type: 'chat',
    contextWindowTokens: 245_760,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 30,
      output: 30,
      currency: 'CNY',
    },
  },
  {
    id: 'abab6.5t-chat',
    displayName: 'ABAB 6.5t Chat',
    description: 'ABAB 6.5t 是高性能通用模型。',
    type: 'chat',
    contextWindowTokens: 8_192,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 10,
      output: 10,
      currency: 'CNY',
    },
  },
  {
    id: 'abab6.5g-chat',
    displayName: 'ABAB 6.5g Chat',
    description: 'ABAB 6.5g 是经济实惠的选择。',
    type: 'chat',
    contextWindowTokens: 8_192,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 5,
      output: 5,
      currency: 'CNY',
    },
  },
];

export default minimaxModels;
