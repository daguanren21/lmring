export interface ModelMetadata {
  id: string;
  name: string;
  contextLength?: number;
  maxOutputTokens?: number;
  inputPricePerMillion?: number;
  outputPricePerMillion?: number;
  supportedFormats?: ('openai' | 'anthropic')[];
}

export interface ProviderMetadata {
  id: string;
  name: string;
  description?: string;
  type: 'official' | 'compatible' | 'custom';
  compatibleConfig?: {
    baseURL: string;
    alternativeBaseURL?: string;
    defaultHeaders?: Record<string, string>;
  };
  models?: ModelMetadata[];
  supportsStreaming?: boolean;
  supportsStructuredOutput?: boolean;
  supportsVision?: boolean;
  supportsFunctionCalling?: boolean;
}

export const OFFICIAL_PROVIDER_METADATA: ProviderMetadata[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
    models: [
      {
        id: 'gpt-4o',
        name: 'GPT-4o',
        contextLength: 128000,
        maxOutputTokens: 16384,
      },
      {
        id: 'gpt-4o-mini',
        name: 'GPT-4o Mini',
        contextLength: 128000,
        maxOutputTokens: 16384,
      },
      {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo',
        contextLength: 128000,
        maxOutputTokens: 4096,
      },
      {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        contextLength: 16385,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
    models: [
      {
        id: 'claude-3-5-sonnet-20241022',
        name: 'Claude 3.5 Sonnet',
        contextLength: 200000,
        maxOutputTokens: 8192,
      },
      {
        id: 'claude-3-5-haiku-20241022',
        name: 'Claude 3.5 Haiku',
        contextLength: 200000,
        maxOutputTokens: 8192,
      },
      {
        id: 'claude-3-opus-20240229',
        name: 'Claude 3 Opus',
        contextLength: 200000,
        maxOutputTokens: 4096,
      },
      {
        id: 'claude-3-sonnet-20240229',
        name: 'Claude 3 Sonnet',
        contextLength: 200000,
        maxOutputTokens: 4096,
      },
      {
        id: 'claude-3-haiku-20240307',
        name: 'Claude 3 Haiku',
        contextLength: 200000,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'azure',
    name: 'Azure OpenAI',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
  },
  {
    id: 'vertex',
    name: 'Google Vertex AI',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
    models: [
      {
        id: 'gemini-1.5-pro',
        name: 'Gemini 1.5 Pro',
        contextLength: 2097152,
        maxOutputTokens: 8192,
      },
      {
        id: 'gemini-1.5-flash',
        name: 'Gemini 1.5 Flash',
        contextLength: 1048576,
        maxOutputTokens: 8192,
      },
      {
        id: 'gemini-2.0-flash-exp',
        name: 'Gemini 2.0 Flash (Experimental)',
        contextLength: 1048576,
        maxOutputTokens: 8192,
      },
    ],
  },
  {
    id: 'xai',
    name: 'xAI',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    models: [
      {
        id: 'grok-beta',
        name: 'Grok Beta',
        contextLength: 131072,
        maxOutputTokens: 4096,
      },
      {
        id: 'grok-vision-beta',
        name: 'Grok Vision Beta',
        contextLength: 8192,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    models: [
      {
        id: 'deepseek-chat',
        name: 'DeepSeek Chat',
        contextLength: 65536,
        maxOutputTokens: 8192,
      },
      {
        id: 'deepseek-coder',
        name: 'DeepSeek Coder',
        contextLength: 65536,
        maxOutputTokens: 8192,
      },
    ],
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    models: [
      {
        id: 'mistral-large-latest',
        name: 'Mistral Large',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
      {
        id: 'mistral-medium-latest',
        name: 'Mistral Medium',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
      {
        id: 'mistral-small-latest',
        name: 'Mistral Small',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
  },
  {
    id: 'google',
    name: 'Google AI',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
    models: [
      {
        id: 'gemini-1.5-pro',
        name: 'Gemini 1.5 Pro',
        contextLength: 2097152,
        maxOutputTokens: 8192,
      },
      {
        id: 'gemini-1.5-flash',
        name: 'Gemini 1.5 Flash',
        contextLength: 1048576,
        maxOutputTokens: 8192,
      },
      {
        id: 'gemini-2.0-flash-exp',
        name: 'Gemini 2.0 Flash (Experimental)',
        contextLength: 1048576,
        maxOutputTokens: 8192,
      },
    ],
  },
  {
    id: 'bedrock',
    name: 'Amazon Bedrock',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
  },
  {
    id: 'ollama',
    name: 'Ollama',
    type: 'official',
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    supportsFunctionCalling: true,
  },
];

export const DOMESTIC_PROVIDER_METADATA: ProviderMetadata[] = [
  {
    id: 'silicon',
    name: 'SiliconFlow',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://api.siliconflow.cn/v1',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    models: [
      {
        id: 'Qwen/Qwen2.5-7B-Instruct',
        name: 'Qwen2.5 7B Instruct',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
      {
        id: 'Qwen/Qwen2.5-72B-Instruct',
        name: 'Qwen2.5 72B Instruct',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
      {
        id: 'deepseek-ai/DeepSeek-V2.5',
        name: 'DeepSeek V2.5',
        contextLength: 65536,
        maxOutputTokens: 8192,
      },
      {
        id: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
        name: 'Llama 3.1 70B',
        contextLength: 131072,
        maxOutputTokens: 8192,
      },
    ],
  },
  {
    id: 'dashscope',
    name: 'Alibaba Cloud Dashscope',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    models: [
      {
        id: 'qwen-turbo',
        name: 'Qwen Turbo',
        contextLength: 8192,
        maxOutputTokens: 2048,
      },
      {
        id: 'qwen-plus',
        name: 'Qwen Plus',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
      {
        id: 'qwen-max',
        name: 'Qwen Max',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
      {
        id: 'qwen-vl-max',
        name: 'Qwen VL Max',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
    ],
  },
  {
    id: 'zhipu',
    name: 'Zhipu AI',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://open.bigmodel.cn/api/paas/v4',
      alternativeBaseURL: 'https://open.bigmodel.cn/api/anthropic',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    models: [
      {
        id: 'glm-4-plus',
        name: 'GLM-4 Plus',
        contextLength: 131072,
        maxOutputTokens: 8192,
        supportedFormats: ['openai', 'anthropic'],
      },
      {
        id: 'glm-4-0520',
        name: 'GLM-4 0520',
        contextLength: 131072,
        maxOutputTokens: 8192,
        supportedFormats: ['openai', 'anthropic'],
      },
      {
        id: 'glm-4-flash',
        name: 'GLM-4 Flash',
        contextLength: 131072,
        maxOutputTokens: 4096,
        supportedFormats: ['openai', 'anthropic'],
      },
    ],
  },
  {
    id: 'baichuan',
    name: 'Baichuan AI',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://api.baichuan-ai.com/v1',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    models: [
      {
        id: 'Baichuan4',
        name: 'Baichuan 4',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
      {
        id: 'Baichuan3-Turbo',
        name: 'Baichuan 3 Turbo',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
      {
        id: 'Baichuan2-Turbo',
        name: 'Baichuan 2 Turbo',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'moonshot',
    name: 'Moonshot AI',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://api.moonshot.cn/v1',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    models: [
      {
        id: 'moonshot-v1-8k',
        name: 'Moonshot V1 8K',
        contextLength: 8192,
        maxOutputTokens: 4096,
      },
      {
        id: 'moonshot-v1-32k',
        name: 'Moonshot V1 32K',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
      {
        id: 'moonshot-v1-128k',
        name: 'Moonshot V1 128K',
        contextLength: 131072,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'yi',
    name: '01.AI (Yi)',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://api.lingyiwanwu.com/v1',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    models: [
      {
        id: 'yi-large',
        name: 'Yi Large',
        contextLength: 32768,
        maxOutputTokens: 4096,
      },
      {
        id: 'yi-medium',
        name: 'Yi Medium',
        contextLength: 16384,
        maxOutputTokens: 4096,
      },
      {
        id: 'yi-spark',
        name: 'Yi Spark',
        contextLength: 16384,
        maxOutputTokens: 4096,
      },
      {
        id: 'yi-large-turbo',
        name: 'Yi Large Turbo',
        contextLength: 16384,
        maxOutputTokens: 4096,
      },
      {
        id: 'yi-vision',
        name: 'Yi Vision',
        contextLength: 16384,
        maxOutputTokens: 4096,
      },
    ],
  },
  {
    id: 'minimax',
    name: 'MiniMax',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://api.minimax.chat/v1',
      alternativeBaseURL: 'https://api.minimax.chat/v1/anthropic',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    models: [
      {
        id: 'abab6.5s-chat',
        name: 'ABAB 6.5s Chat',
        contextLength: 245760,
        maxOutputTokens: 8192,
        supportedFormats: ['openai', 'anthropic'],
      },
      {
        id: 'abab6.5t-chat',
        name: 'ABAB 6.5t Chat',
        contextLength: 8192,
        maxOutputTokens: 4096,
        supportedFormats: ['openai', 'anthropic'],
      },
      {
        id: 'abab6.5g-chat',
        name: 'ABAB 6.5g Chat',
        contextLength: 8192,
        maxOutputTokens: 4096,
        supportedFormats: ['openai', 'anthropic'],
      },
    ],
  },
  {
    id: 'step',
    name: 'StepFun',
    type: 'compatible',
    compatibleConfig: {
      baseURL: 'https://api.stepfun.com/v1',
    },
    supportsStreaming: true,
    supportsStructuredOutput: true,
    supportsVision: true,
    models: [
      {
        id: 'step-1v-32k',
        name: 'Step 1V 32K',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
      {
        id: 'step-1-32k',
        name: 'Step 1 32K',
        contextLength: 32768,
        maxOutputTokens: 8192,
      },
      {
        id: 'step-1-128k',
        name: 'Step 1 128K',
        contextLength: 128000,
        maxOutputTokens: 8192,
      },
      {
        id: 'step-2-16k',
        name: 'Step 2 16K',
        contextLength: 16384,
        maxOutputTokens: 8192,
      },
    ],
  },
];

export const ALL_PROVIDER_METADATA: ProviderMetadata[] = [
  ...OFFICIAL_PROVIDER_METADATA,
  ...DOMESTIC_PROVIDER_METADATA,
];
