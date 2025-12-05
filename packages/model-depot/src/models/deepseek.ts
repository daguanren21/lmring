import type { ChatModelCard } from '../types';

const deepseekModels: ChatModelCard[] = [
  {
    id: 'deepseek-chat',
    displayName: 'DeepSeek Chat',
    description: 'DeepSeek Chat 是通用对话模型，具有优秀的中英文能力。',
    type: 'chat',
    contextWindowTokens: 65_536,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.14,
      output: 0.28,
      cachedInput: 0.014,
    },
  },
  {
    id: 'deepseek-coder',
    displayName: 'DeepSeek Coder',
    description: 'DeepSeek Coder 专门针对编程任务优化。',
    type: 'chat',
    contextWindowTokens: 65_536,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.14,
      output: 0.28,
      cachedInput: 0.014,
    },
  },
  {
    id: 'deepseek-reasoner',
    displayName: 'DeepSeek Reasoner',
    description: 'DeepSeek Reasoner 是具有强大推理能力的模型。',
    type: 'chat',
    contextWindowTokens: 65_536,
    maxOutput: 8_192,
    abilities: {
      reasoning: true,
      functionCall: true,
    },
    pricing: {
      input: 0.55,
      output: 2.19,
      cachedInput: 0.14,
    },
  },
];

export default deepseekModels;
