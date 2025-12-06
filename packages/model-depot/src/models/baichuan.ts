import type { ChatModelCard } from '../types';

const baichuanModels: ChatModelCard[] = [
  // Baichuan 4 Series
  {
    id: 'Baichuan4',
    displayName: 'Baichuan 4',
    description:
      '模型能力国内第一，在知识百科、长文本、生成创作等中文任务上超越国外主流模型。还具备行业领先的多模态能力，多项权威评测基准表现优异。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 100,
      output: 100,
      currency: 'CNY',
    },
  },
  {
    id: 'Baichuan4-Turbo',
    displayName: 'Baichuan 4 Turbo',
    description:
      '模型能力国内第一，在知识百科、长文本、生成创作等中文任务上超越国外主流模型。还具备行业领先的多模态能力，多项权威评测基准表现优异。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 15,
      output: 15,
      currency: 'CNY',
    },
  },
  {
    id: 'Baichuan4-Air',
    displayName: 'Baichuan 4 Air',
    description:
      '模型能力国内第一，在知识百科、长文本、生成创作等中文任务上超越国外主流模型。还具备行业领先的多模态能力，多项权威评测基准表现优异。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 4_096,
    enabled: true,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 0.98,
      output: 0.98,
      currency: 'CNY',
    },
  },

  // Baichuan 3 Series
  {
    id: 'Baichuan3-Turbo',
    displayName: 'Baichuan 3 Turbo',
    description:
      '针对企业高频场景优化，效果大幅提升，高性价比。相对于Baichuan2模型，内容创作提升20%，知识问答提升17%，角色扮演能力提升40%。整体效果比GPT3.5更优。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    abilities: {
      functionCall: true,
      search: true,
    },
    pricing: {
      input: 12,
      output: 12,
      currency: 'CNY',
    },
  },
  {
    id: 'Baichuan3-Turbo-128k',
    displayName: 'Baichuan 3 Turbo 128K',
    description:
      '具备 128K 超长上下文窗口，针对企业高频场景优化，效果大幅提升，高性价比。相对于Baichuan2模型，内容创作提升20%，知识问答提升17%，角色扮演能力提升40%。整体效果比GPT3.5更优。',
    type: 'chat',
    contextWindowTokens: 128_000,
    maxOutput: 4_096,
    pricing: {
      input: 24,
      output: 24,
      currency: 'CNY',
    },
  },

  // Baichuan 2 Series
  {
    id: 'Baichuan2-Turbo',
    displayName: 'Baichuan 2 Turbo',
    description:
      '采用搜索增强技术实现大模型与领域知识、全网知识的全面链接。支持PDF、Word等多种文档上传及网址输入，信息获取及时、全面，输出结果准确、专业。',
    type: 'chat',
    contextWindowTokens: 32_768,
    maxOutput: 8_192,
    pricing: {
      input: 8,
      output: 8,
      currency: 'CNY',
    },
  },
];

export default baichuanModels;
