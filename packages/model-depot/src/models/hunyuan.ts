import type { ChatModelCard } from '../types';

const hunyuanModels: ChatModelCard[] = [
  {
    id: 'hunyuan-a13b',
    displayName: 'Hunyuan A13B',
    description: '混元混合推理模型，总参数80B，激活13B，支持快慢思考模式切换。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 32_000,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
    },
  },
  {
    id: 'hunyuan-t1-latest',
    displayName: 'Hunyuan T1',
    description: '混元深度思考模型，提升高难数学、复杂推理、代码等能力。',
    type: 'chat',
    contextWindowTokens: 96_000,
    maxOutput: 64_000,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 4,
    },
  },
  {
    id: 'hunyuan-lite',
    displayName: 'Hunyuan Lite',
    description: '混元轻量模型，MOE结构，256k上下文，免费使用。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 6000,
    enabled: true,
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
  },
  {
    id: 'hunyuan-standard-256K',
    displayName: 'Hunyuan Standard 256K',
    description: '混元标准模型，支持256k长文本处理。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 6000,
    abilities: {
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.5,
      output: 2,
    },
  },
  {
    id: 'hunyuan-large',
    displayName: 'Hunyuan Large',
    description: '混元大规模模型，总参数389B，激活52B，开源MoE模型中规模最大。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    enabled: true,
    abilities: {
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 12,
    },
  },
  {
    id: 'hunyuan-turbos-latest',
    displayName: 'Hunyuan TurboS',
    description: '混元旗舰大模型最新版本，具备更强思考能力。',
    type: 'chat',
    contextWindowTokens: 44_000,
    maxOutput: 16_000,
    enabled: true,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 2,
    },
  },
  {
    id: 'hunyuan-turbo-latest',
    displayName: 'Hunyuan Turbo',
    description: '混元通用优化模型，在NLP理解、创作、问答等方面表现优异。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 2.4,
      output: 9.6,
    },
  },
  {
    id: 'hunyuan-vision',
    displayName: 'Hunyuan Vision',
    description: '混元多模态模型，支持图片+文本输入生成文本。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 16_000,
    abilities: {
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 18,
      output: 18,
    },
  },
  {
    id: 'hunyuan-turbos-vision',
    displayName: 'Hunyuan TurboS Vision',
    description: '混元视觉语言旗舰模型，增强图文理解能力。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 24_000,
    abilities: {
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 3,
      output: 9,
    },
  },
  {
    id: 'hunyuan-code',
    displayName: 'Hunyuan Code',
    description: '混元代码生成模型，经过200B高质量代码数据增训。',
    type: 'chat',
    contextWindowTokens: 8000,
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      input: 3.5,
      output: 7,
    },
  },
  {
    id: 'hunyuan-functioncall',
    displayName: 'Hunyuan FunctionCall',
    description: '混元MOE架构FunctionCall模型，专为工具调用优化。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    abilities: {
      functionCall: true,
    },
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 8,
    },
  },
];

export default hunyuanModels;
