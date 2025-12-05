import type { ChatModelCard } from '../types';

const internlmModels: ChatModelCard[] = [
  {
    id: 'internlm3-latest',
    displayName: 'InternLM3',
    description: '书生浦语最新模型系列，卓越推理性能，领跑同量级开源模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    enabled: true,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0,
      output: 0,
    },
  },
  {
    id: 'internlm2.5-latest',
    displayName: 'InternLM2.5',
    description: '书生浦语稳定版，支持1M上下文和强大的工具调用能力。',
    type: 'chat',
    contextWindowTokens: 32_768,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 0,
      output: 0,
    },
  },
  {
    id: 'internvl3-latest',
    displayName: 'InternVL3',
    description: '书生浦语多模态大模型，具备强大的图文理解能力。',
    type: 'chat',
    contextWindowTokens: 32_768,
    enabled: true,
    abilities: {
      vision: true,
    },
    pricing: {
      input: 0,
      output: 0,
    },
  },
  {
    id: 'internvl2.5-latest',
    displayName: 'InternVL2.5',
    description: '书生浦语多模态稳定版，具备优异且稳定的性能。',
    type: 'chat',
    contextWindowTokens: 32_768,
    abilities: {
      vision: true,
    },
    pricing: {
      input: 0,
      output: 0,
    },
  },
];

export default internlmModels;
