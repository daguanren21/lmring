import type { ChatModelCard } from '../types';

const nvidiaModels: ChatModelCard[] = [
  {
    id: 'minimaxai/minimax-m2',
    displayName: 'MiniMax-M2',
    description: 'MiniMax紧凑MoE模型，编码和智能体任务表现优异。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 16_384,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
  },
  {
    id: 'deepseek-ai/deepseek-v3.1-terminus',
    displayName: 'DeepSeek V3.1 Terminus',
    description: 'DeepSeek V3.1下一代推理模型，复杂推理与链路思考。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 16_384,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
    },
  },
  {
    id: 'meta/llama-3.3-70b-instruct',
    displayName: 'Llama 3.3 70B Instruct',
    description: '先进LLM，擅长推理、数学、常识和函数调用。',
    type: 'chat',
    contextWindowTokens: 128_000,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'meta/llama-3.2-11b-vision-instruct',
    displayName: 'Llama 3.2 11B Vision Instruct',
    description: '尖端视觉语言模型，擅长图像高质量推理。',
    type: 'chat',
    contextWindowTokens: 128_000,
    abilities: {
      vision: true,
    },
  },
  {
    id: 'meta/llama-3.2-90b-vision-instruct',
    displayName: 'Llama 3.2 90B Vision Instruct',
    description: '大规模视觉语言模型，图像推理能力强。',
    type: 'chat',
    contextWindowTokens: 128_000,
    abilities: {
      vision: true,
    },
  },
  {
    id: 'meta/llama-3.1-70b-instruct',
    displayName: 'Llama 3.1 70B Instruct',
    description: '赋能复杂对话，上下文理解推理能力卓越。',
    type: 'chat',
    contextWindowTokens: 128_000,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'meta/llama-3.1-405b-instruct',
    displayName: 'Llama 3.1 405B Instruct',
    description: '高级LLM，支持合成数据生成和知识蒸馏。',
    type: 'chat',
    contextWindowTokens: 128_000,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'nvidia/llama-3.1-nemotron-70b-instruct',
    displayName: 'Llama 3.1 Nemotron 70B Instruct',
    description: 'NVIDIA定制大模型，提升响应帮助程度。',
    type: 'chat',
    contextWindowTokens: 32_768,
  },
  {
    id: 'deepseek-ai/deepseek-r1',
    displayName: 'DeepSeek R1',
    description: '最先进高效LLM，擅长推理数学编程。',
    type: 'chat',
    contextWindowTokens: 128_000,
    abilities: {
      reasoning: true,
    },
  },
  {
    id: 'google/gemma-2-27b-it',
    displayName: 'Gemma 2 27B Instruct',
    description: '尖端文本生成模型，文本理解代码生成出色。',
    type: 'chat',
    contextWindowTokens: 8192,
  },
  {
    id: 'qwen/qwen2.5-72b-instruct',
    displayName: 'Qwen2.5 72B Instruct',
    description: 'NVIDIA托管的Qwen2.5 72B模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'qwen/qwen2.5-coder-32b-instruct',
    displayName: 'Qwen2.5 Coder 32B Instruct',
    description: '高级LLM，代码生成推理修复能力强。',
    type: 'chat',
    contextWindowTokens: 32_768,
  },
];

export default nvidiaModels;
