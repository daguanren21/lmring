import type { ChatModelCard } from '../types';

const mistralModels: ChatModelCard[] = [
  {
    id: 'mistral-large-latest',
    displayName: 'Mistral Large',
    description: 'Mistral Large 是 Mistral 最强大的模型，适合复杂任务。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 2,
      output: 6,
    },
  },
  {
    id: 'mistral-medium-latest',
    displayName: 'Mistral Medium',
    description: 'Mistral Medium 在性能和成本之间取得平衡。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 2.7,
      output: 8.1,
    },
  },
  {
    id: 'mistral-small-latest',
    displayName: 'Mistral Small',
    description: 'Mistral Small 是快速、经济的选择。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.2,
      output: 0.6,
    },
  },
  {
    id: 'codestral-latest',
    displayName: 'Codestral',
    description: 'Codestral 专门针对代码生成和理解优化。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0.2,
      output: 0.6,
    },
  },
];

export default mistralModels;
