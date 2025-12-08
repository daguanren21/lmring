import type { ChatModelCard } from '../types';

const hunyuanModels: ChatModelCard[] = [
  // Hunyuan A13B (Hybrid Reasoning)
  {
    id: 'hunyuan-a13b',
    displayName: 'Hunyuan A13B',
    description:
      '混元混合推理模型，总参数80B，激活13B，支持快慢思考模式切换，数学、科学、长文理解和 Agent 能力提升显著。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 32_000,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
    },
    releasedAt: '2025-06-25',
  },

  // Hunyuan T1 Series (Deep Thinking)
  {
    id: 'hunyuan-t1-latest',
    displayName: 'Hunyuan T1',
    description: '混元深度思考模型，大幅提升高难数学、复杂推理、高难代码等能力。',
    type: 'chat',
    contextWindowTokens: 96_000,
    maxOutput: 64_000,
    enabled: true,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      input: 1,
      output: 4,
      currency: 'CNY',
    },
    releasedAt: '2025-08-22',
  },
  {
    id: 'hunyuan-t1-20250711',
    displayName: 'Hunyuan T1 20250711',
    description: '大幅提升高难度数学、逻辑和代码能力，优化模型输出稳定性，提升模型长文能力。',
    type: 'chat',
    contextWindowTokens: 92_000,
    maxOutput: 64_000,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      input: 1,
      output: 4,
      currency: 'CNY',
    },
    releasedAt: '2025-07-11',
  },
  {
    id: 'hunyuan-t1-20250529',
    displayName: 'Hunyuan T1 20250529',
    description: '优化文本创作、作文写作，优化代码前端、数学、逻辑推理等理科能力。',
    type: 'chat',
    contextWindowTokens: 92_000,
    maxOutput: 64_000,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      input: 1,
      output: 4,
      currency: 'CNY',
    },
    releasedAt: '2025-05-29',
  },
  {
    id: 'hunyuan-t1-20250403',
    displayName: 'Hunyuan T1 20250403',
    description: '提升项目级别代码生成能力；提升文本生成写作质量。',
    type: 'chat',
    contextWindowTokens: 92_000,
    maxOutput: 64_000,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      input: 1,
      output: 4,
      currency: 'CNY',
    },
    releasedAt: '2025-04-03',
  },
  {
    id: 'hunyuan-t1-20250321',
    displayName: 'Hunyuan T1 20250321',
    description: '全面搭建模型文理科能力，长文本信息捕捉能力强。',
    type: 'chat',
    contextWindowTokens: 92_000,
    maxOutput: 64_000,
    abilities: {
      reasoning: true,
      search: true,
    },
    pricing: {
      input: 1,
      output: 4,
      currency: 'CNY',
    },
    releasedAt: '2025-03-21',
  },

  // Hunyuan T1 Vision Series
  {
    id: 'hunyuan-t1-vision-20250916',
    displayName: 'Hunyuan T1 Vision 20250916',
    description:
      '混元最新版 t1-vision 视觉深度思考模型，在通用图文问答、视觉定位、OCR 等任务上全面提升。',
    type: 'chat',
    contextWindowTokens: 40_000,
    maxOutput: 16_000,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      input: 3,
      output: 9,
      currency: 'CNY',
    },
    releasedAt: '2025-09-16',
  },
  {
    id: 'hunyuan-t1-vision-20250619',
    displayName: 'Hunyuan T1 Vision 20250619',
    description: '混元 t1-vision 多模态理解深度思考模型，支持多模态原生长思维链。',
    type: 'chat',
    contextWindowTokens: 40_000,
    maxOutput: 16_000,
    abilities: {
      reasoning: true,
      vision: true,
    },
    pricing: {
      input: 3,
      output: 9,
      currency: 'CNY',
    },
    releasedAt: '2025-06-19',
  },

  // Hunyuan Standard Series
  {
    id: 'hunyuan-lite',
    displayName: 'Hunyuan Lite',
    description: '混元轻量模型，MOE 结构，256k 上下文，免费使用。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 6000,
    enabled: true,
    pricing: {
      input: 0,
      output: 0,
      currency: 'CNY',
    },
    releasedAt: '2024-10-30',
  },
  {
    id: 'hunyuan-standard',
    displayName: 'Hunyuan Standard',
    description: '混元标准模型，采用优化路由策略，长文方面大海捞针指标达到 99.9%。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 2000,
    abilities: {
      search: true,
    },
    pricing: {
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-02-10',
  },
  {
    id: 'hunyuan-standard-256K',
    displayName: 'Hunyuan Standard 256K',
    description: '混元标准模型，支持 256k 长文本处理。',
    type: 'chat',
    contextWindowTokens: 256_000,
    maxOutput: 6000,
    abilities: {
      search: true,
    },
    pricing: {
      input: 0.5,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-02-10',
  },

  // Hunyuan Large Series
  {
    id: 'hunyuan-large',
    displayName: 'Hunyuan Large',
    description: '混元大规模模型，总参数 389B，激活 52B，开源 MoE 模型中规模最大。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    enabled: true,
    abilities: {
      search: true,
    },
    pricing: {
      input: 4,
      output: 12,
      currency: 'CNY',
    },
    releasedAt: '2025-02-10',
  },
  {
    id: 'hunyuan-large-longcontext',
    displayName: 'Hunyuan Large Longcontext',
    description: '擅长处理长文任务如文档摘要和文档问答等。',
    type: 'chat',
    contextWindowTokens: 134_000,
    maxOutput: 6000,
    abilities: {
      search: true,
    },
    pricing: {
      input: 6,
      output: 18,
      currency: 'CNY',
    },
    releasedAt: '2024-12-18',
  },
  {
    id: 'hunyuan-large-vision',
    displayName: 'Hunyuan Large Vision',
    description: '基于混元 Large 训练的视觉语言大模型，支持任意分辨率多张图片+文本输入。',
    type: 'chat',
    contextWindowTokens: 16_000,
    maxOutput: 8000,
    abilities: {
      vision: true,
    },
    releasedAt: '2025-05-26',
  },

  // Hunyuan TurboS Series
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
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-07-16',
  },
  {
    id: 'hunyuan-turbos-20250926',
    displayName: 'Hunyuan TurboS 20250926',
    description: '预训练底座数据质量升级，持续提升 Agent、英语小语种、指令遵循、代码和理科能力。',
    type: 'chat',
    contextWindowTokens: 44_000,
    maxOutput: 16_000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-09-26',
  },
  {
    id: 'hunyuan-turbos-20250604',
    displayName: 'Hunyuan TurboS 20250604',
    description: '预训练底座升级，写作、阅读理解能力提升，较大幅度提升代码和理科能力。',
    type: 'chat',
    contextWindowTokens: 44_000,
    maxOutput: 16_000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-06-04',
  },
  {
    id: 'hunyuan-turbos-20250416',
    displayName: 'Hunyuan TurboS 20250416',
    description: '增强底座的指令理解及遵循能力；增强数学、代码、逻辑、科学等理科能力。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 8000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-04-16',
  },
  {
    id: 'hunyuan-turbos-20250313',
    displayName: 'Hunyuan TurboS 20250313',
    description: '统一数学解题步骤的风格，文本创作优化回答风格。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 8000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 0.8,
      output: 2,
      currency: 'CNY',
    },
    releasedAt: '2025-03-13',
  },
  {
    id: 'hunyuan-turbos-longtext-128k-20250325',
    displayName: 'Hunyuan TurboS LongText 128K',
    description: '擅长处理长文任务如文档摘要和文档问答等。',
    type: 'chat',
    contextWindowTokens: 134_000,
    maxOutput: 6000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 1.5,
      output: 6,
      currency: 'CNY',
    },
    releasedAt: '2025-03-25',
  },

  // Hunyuan TurboS Vision Series
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
      input: 3,
      output: 9,
      currency: 'CNY',
    },
    releasedAt: '2025-05-23',
  },
  {
    id: 'hunyuan-turbos-vision-20250619',
    displayName: 'Hunyuan TurboS Vision 20250619',
    description:
      '在图文理解相关的任务上，包括基于图片的实体识别、知识问答、文案创作等上面全面提升。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 16_000,
    abilities: {
      vision: true,
    },
    pricing: {
      input: 3,
      output: 9,
      currency: 'CNY',
    },
    releasedAt: '2025-06-19',
  },

  // Hunyuan Turbo Series
  {
    id: 'hunyuan-turbo-latest',
    displayName: 'Hunyuan Turbo',
    description: '混元通用优化模型，在 NLP 理解、创作、问答等方面表现优异。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 2.4,
      output: 9.6,
      currency: 'CNY',
    },
    releasedAt: '2025-01-10',
  },
  {
    id: 'hunyuan-turbo-20241223',
    displayName: 'Hunyuan Turbo 20241223',
    description: '数据指令 scaling，大幅提升模型通用泛化能力。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 2.4,
      output: 9.6,
      currency: 'CNY',
    },
    releasedAt: '2025-01-10',
  },
  {
    id: 'hunyuan-turbo-vision',
    displayName: 'Hunyuan Turbo Vision',
    description:
      '混元 MoE 结构视觉语言旗舰大模型，在图文理解相关的基础识别、内容创作等能力上全面提升。',
    type: 'chat',
    contextWindowTokens: 8000,
    maxOutput: 2000,
    abilities: {
      vision: true,
    },
    pricing: {
      input: 80,
      output: 80,
      currency: 'CNY',
    },
    releasedAt: '2024-11-26',
  },

  // Hunyuan Vision Series
  {
    id: 'hunyuan-lite-vision',
    displayName: 'Hunyuan Lite Vision',
    description:
      '混元最新 7B 多模态模型，上下文窗口 32K，支持中英文场景的多模态对话、图像物体识别、文档表格理解。',
    type: 'chat',
    contextWindowTokens: 36_000,
    maxOutput: 4000,
    abilities: {
      vision: true,
    },
    releasedAt: '2024-12-12',
  },
  {
    id: 'hunyuan-standard-vision',
    displayName: 'Hunyuan Standard Vision',
    description: '混元最新多模态模型，支持多语种作答，中英文能力均衡。',
    type: 'chat',
    contextWindowTokens: 8000,
    maxOutput: 2000,
    abilities: {
      vision: true,
    },
    releasedAt: '2024-12-31',
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
      input: 18,
      output: 18,
      currency: 'CNY',
    },
    releasedAt: '2025-01-03',
  },

  // Specialized Models
  {
    id: 'hunyuan-code',
    displayName: 'Hunyuan Code',
    description: '混元代码生成模型，经过 200B 高质量代码数据增训。',
    type: 'chat',
    contextWindowTokens: 8000,
    maxOutput: 4000,
    pricing: {
      input: 3.5,
      output: 7,
      currency: 'CNY',
    },
    releasedAt: '2024-11-12',
  },
  {
    id: 'hunyuan-functioncall',
    displayName: 'Hunyuan FunctionCall',
    description: '混元 MOE 架构 FunctionCall 模型，专为工具调用优化。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    abilities: {
      functionCall: true,
    },
    pricing: {
      input: 4,
      output: 8,
      currency: 'CNY',
    },
    releasedAt: '2025-04-22',
  },
  {
    id: 'hunyuan-role',
    displayName: 'Hunyuan Role',
    description: '混元角色扮演模型，基于混元模型结合角色扮演场景数据集进行增训。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
    pricing: {
      input: 4,
      output: 8,
      currency: 'CNY',
    },
    releasedAt: '2024-07-04',
  },
  {
    id: 'hunyuan-turbos-role-plus',
    displayName: 'Hunyuan TurboS Role Plus',
    description: '混元最新版角色扮演模型，在角色扮演场景具有更好的基础效果。',
    type: 'chat',
    contextWindowTokens: 32_000,
    maxOutput: 4000,
  },
];

export default hunyuanModels;
