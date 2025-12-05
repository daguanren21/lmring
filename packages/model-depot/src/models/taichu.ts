import type { ChatModelCard } from '../types';

const taichuChatModels: ChatModelCard[] = [
  {
    contextWindowTokens: 4096,
    description: '紫东太初大模型是中科院自动化研究所推出的多模态大模型，支持全面的问答和创作任务。',
    displayName: 'Taichu LLM',
    enabled: true,
    id: 'taichu_llm',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description: 'Taichu VL 是紫东太初的多模态视觉语言模型，支持图像理解和分析。',
    displayName: 'Taichu VL',
    id: 'taichu_vl',
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: 'Taichu 2.0 是新一代紫东太初大模型，具有更强的认知和创作能力。',
    displayName: 'Taichu 2.0',
    id: 'taichu2.0',
    type: 'chat',
  },
];

export const allModels = [...taichuChatModels];

export default allModels;
