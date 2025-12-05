import type { ChatModelCard } from '../types';

const xaiModels: ChatModelCard[] = [
  {
    id: 'grok-beta',
    displayName: 'Grok Beta',
    description: 'Grok 是 xAI 的旗舰对话模型，具有实时知识和推理能力。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    pricing: {
      input: 5,
      output: 15,
    },
  },
  {
    id: 'grok-vision-beta',
    displayName: 'Grok Vision Beta',
    description: 'Grok Vision 支持图像理解和视觉分析。',
    type: 'chat',
    contextWindowTokens: 8_192,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      vision: true,
    },
    pricing: {
      input: 5,
      output: 15,
    },
  },
  {
    id: 'grok-2',
    displayName: 'Grok 2',
    description: 'Grok 2 是升级版本，提供更强的推理和对话能力。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4_096,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 2,
      output: 10,
    },
  },
];

export default xaiModels;
