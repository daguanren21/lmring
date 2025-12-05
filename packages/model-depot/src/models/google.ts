import type { ChatModelCard } from '../types';

const googleModels: ChatModelCard[] = [
  {
    id: 'gemini-2.0-flash-exp',
    displayName: 'Gemini 2.0 Flash (Experimental)',
    description: 'Gemini 2.0 Flash 是 Google 最新的实验性高速模型。',
    type: 'chat',
    contextWindowTokens: 1_048_576,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.075,
      output: 0.3,
    },
  },
  {
    id: 'gemini-1.5-pro',
    displayName: 'Gemini 1.5 Pro',
    description: 'Gemini 1.5 Pro 是具有超长上下文窗口的多模态模型。',
    type: 'chat',
    contextWindowTokens: 2_097_152,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      video: true,
      structuredOutput: true,
    },
    pricing: {
      input: 1.25,
      output: 5,
    },
  },
  {
    id: 'gemini-1.5-flash',
    displayName: 'Gemini 1.5 Flash',
    description: 'Gemini 1.5 Flash 是快速、高效的多模态模型。',
    type: 'chat',
    contextWindowTokens: 1_048_576,
    maxOutput: 8_192,
    enabled: true,
    abilities: {
      functionCall: true,
      vision: true,
      video: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.075,
      output: 0.3,
    },
  },
  {
    id: 'gemini-1.5-flash-8b',
    displayName: 'Gemini 1.5 Flash 8B',
    description: 'Gemini 1.5 Flash 8B 是更小、更快的版本。',
    type: 'chat',
    contextWindowTokens: 1_048_576,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      vision: true,
      structuredOutput: true,
    },
    pricing: {
      input: 0.0375,
      output: 0.15,
    },
  },
];

export default googleModels;
