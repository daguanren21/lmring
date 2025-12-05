import type { ChatModelCard } from '../types';

const wenxinModels: ChatModelCard[] = [
  {
    id: 'ernie-5.0-thinking-latest',
    displayName: 'ERNIE 5.0 Thinking',
    description: '文心5.0原生全模态旗舰模型，支持文本、图像、音频、视频统一建模。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 65_536,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 6,
      output: 24,
    },
  },
  {
    id: 'ernie-4.5-turbo-128k',
    displayName: 'ERNIE 4.5 Turbo 128K',
    description: '文心高性能通用模型，支持搜索增强与工具调用。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 12_288,
    enabled: true,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 0.8,
      output: 3.2,
      cachedInput: 0.2,
    },
  },
  {
    id: 'ernie-speed-128k',
    displayName: 'ERNIE Speed 128K',
    description: '文心免费大模型，适合长文本理解与大规模试用场景。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
  },
  {
    id: 'ernie-speed-8k',
    displayName: 'ERNIE Speed 8K',
    description: '文心免费快速模型，适合日常对话和轻量文本任务。',
    type: 'chat',
    contextWindowTokens: 8192,
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
  },
  {
    id: 'ernie-lite-8k',
    displayName: 'ERNIE Lite 8K',
    description: '文心轻量级通用模型，适合成本敏感的日常问答。',
    type: 'chat',
    contextWindowTokens: 8192,
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      input: 0,
      output: 0,
    },
  },
  {
    id: 'ernie-x1.1-preview',
    displayName: 'ERNIE X1.1 Preview',
    description: '文心X1.1深度思考模型预览版，适合能力验证与测试。',
    type: 'chat',
    contextWindowTokens: 65_536,
    maxOutput: 65_536,
    enabled: true,
    abilities: {
      functionCall: true,
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
    id: 'ernie-4.5-turbo-vl',
    displayName: 'ERNIE 4.5 Turbo VL',
    description: '文心成熟多模态模型，适合图文理解与识别任务。',
    type: 'chat',
    contextWindowTokens: 131_072,
    maxOutput: 16_384,
    abilities: {
      vision: true,
    },
    pricing: {
      currency: 'CNY',
      input: 3,
      output: 9,
      cachedInput: 0.75,
    },
  },
  {
    id: 'deepseek-v3.2-think',
    displayName: 'DeepSeek V3.2 Think',
    description: '百度托管的DeepSeek V3.2满血版深度思考模型。',
    type: 'chat',
    contextWindowTokens: 144_000,
    maxOutput: 32_768,
    enabled: true,
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    pricing: {
      currency: 'CNY',
      input: 2,
      output: 3,
    },
  },
];

export default wenxinModels;
