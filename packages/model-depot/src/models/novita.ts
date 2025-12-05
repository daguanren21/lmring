import type { ChatModelCard } from '../types';

const novitaModels: ChatModelCard[] = [
  {
    id: 'deepseek/deepseek-chat-v3-0324',
    displayName: 'DeepSeek V3 0324',
    description: 'Novita托管的DeepSeek V3最新版本。',
    type: 'chat',
    contextWindowTokens: 131_072,
    enabled: true,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'deepseek/deepseek-r1',
    displayName: 'DeepSeek R1',
    description: 'Novita托管的DeepSeek推理模型。',
    type: 'chat',
    contextWindowTokens: 131_072,
    enabled: true,
    abilities: {
      reasoning: true,
    },
  },
  {
    id: 'qwen/qwen-2.5-72b-instruct',
    displayName: 'Qwen 2.5 72B Instruct',
    description: 'Novita托管的Qwen2.5 72B模型。',
    type: 'chat',
    contextWindowTokens: 32_768,
    abilities: {
      functionCall: true,
    },
  },
  {
    id: 'meta-llama/llama-3.3-70b-instruct',
    displayName: 'Llama 3.3 70B Instruct',
    description: 'Novita托管的Meta Llama 3.3 70B模型。',
    type: 'chat',
    contextWindowTokens: 131_072,
    abilities: {
      functionCall: true,
    },
  },
];

export default novitaModels;
