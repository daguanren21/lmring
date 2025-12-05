import type { ChatModelCard } from '../types';

const perplexityModels: ChatModelCard[] = [
  {
    id: 'sonar-deep-research',
    displayName: 'Sonar Deep Research',
    description: 'Perplexity深度研究模型，生成专家级研究报告。',
    type: 'chat',
    contextWindowTokens: 127_072,
    maxOutput: 8192,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      input: 2,
      output: 8,
    },
  },
  {
    id: 'sonar-reasoning-pro',
    displayName: 'Sonar Reasoning Pro',
    description: 'Perplexity高级推理搜索模型，支持复杂查询。',
    type: 'chat',
    contextWindowTokens: 127_072,
    maxOutput: 8192,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
      vision: true,
    },
    pricing: {
      input: 2,
      output: 8,
    },
  },
  {
    id: 'sonar-reasoning',
    displayName: 'Sonar Reasoning',
    description: 'Perplexity推理搜索模型，支持高级查询和跟进。',
    type: 'chat',
    contextWindowTokens: 127_072,
    maxOutput: 8192,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
      vision: true,
    },
    pricing: {
      input: 1,
      output: 5,
    },
  },
  {
    id: 'sonar-pro',
    displayName: 'Sonar Pro',
    description: 'Perplexity专业搜索模型，支持200k上下文。',
    type: 'chat',
    contextWindowTokens: 200_000,
    enabled: true,
    abilities: {
      search: true,
      vision: true,
    },
    pricing: {
      input: 3,
      output: 15,
    },
  },
  {
    id: 'sonar',
    displayName: 'Sonar',
    description: 'Perplexity轻量搜索模型，更快更经济。',
    type: 'chat',
    contextWindowTokens: 127_072,
    enabled: true,
    abilities: {
      search: true,
      vision: true,
    },
    pricing: {
      input: 1,
      output: 1,
    },
  },
  {
    id: 'r1-1776',
    displayName: 'R1 1776',
    description: 'DeepSeek R1变体，经过后训练，提供未经审查的事实信息。',
    type: 'chat',
    contextWindowTokens: 127_072,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      input: 2,
      output: 8,
    },
  },
];

export default perplexityModels;
