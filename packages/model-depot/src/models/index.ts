import type { DefaultModelListItem, FullModelCard } from '../types';

import ai21Models from './ai21';
import anthropicModels from './anthropic';
import baichuanModels from './baichuan';
import bflModels from './bfl';
import cerebrasModels from './cerebras';
import cloudflareModels from './cloudflare';
import cohereModels from './cohere';
import dashscopeModels from './dashscope';
import deepseekModels from './deepseek';
import fireworksaiModels from './fireworksai';
import giteeaiModels from './giteeai';
import githubModels from './github';
import googleModels from './google';
import groqModels from './groq';
import higressModels from './higress';
import huggingfaceModels from './huggingface';
import hunyuanModels from './hunyuan';
import infiniaiModels from './infiniai';
import internlmModels from './internlm';
import jinaModels from './jina';
import lmstudioModels from './lmstudio';
import minimaxModels from './minimax';
import mistralModels from './mistral';
import modelscopeModels from './modelscope';
import moonshotModels from './moonshot';
import nebiusModels from './nebius';
import novitaModels from './novita';
import nvidiaModels from './nvidia';
import openaiModels from './openai';
import perplexityModels from './perplexity';
import ppioModels from './ppio';
import qiniuModels from './qiniu';
import sambanovaModels from './sambanova';
import search1apiModels from './search1api';
import sensenovaModels from './sensenova';
import siliconModels from './silicon';
import sparkModels from './spark';
import stepfunModels from './stepfun';
import taichuModels from './taichu';
import tencentcloudModels from './tencentcloud';
import togetheraiModels from './togetherai';
import upstageModels from './upstage';
import vllmModels from './vllm';
import volcengineModels from './volcengine';
import wenxinModels from './wenxin';
import xaiModels from './xai';
import xinferenceModels from './xinference';
import yiModels from './yi';
import zhipuModels from './zhipu';

type ModelsMap = Record<string, FullModelCard[]>;

const buildDefaultModelList = (map: ModelsMap): DefaultModelListItem[] => {
  const models: DefaultModelListItem[] = [];

  for (const [providerId, providerModels] of Object.entries(map)) {
    for (const model of providerModels) {
      models.push({
        ...model,
        providerId,
        source: 'builtin',
        abilities: model.abilities ?? {},
      });
    }
  }

  return models;
};

export const PROVIDER_MODELS_MAP: ModelsMap = {
  openai: openaiModels,
  anthropic: anthropicModels,
  deepseek: deepseekModels,
  mistral: mistralModels,
  xai: xaiModels,
  google: googleModels,
  silicon: siliconModels,
  dashscope: dashscopeModels,
  zhipu: zhipuModels,
  baichuan: baichuanModels,
  moonshot: moonshotModels,
  yi: yiModels,
  minimax: minimaxModels,
  step: stepfunModels,
  hunyuan: hunyuanModels,
  spark: sparkModels,
  volcengine: volcengineModels,
  wenxin: wenxinModels,
  sensenova: sensenovaModels,
  internlm: internlmModels,
  groq: groqModels,
  perplexity: perplexityModels,
  cohere: cohereModels,
  togetherai: togetheraiModels,
  fireworksai: fireworksaiModels,
  sambanova: sambanovaModels,
  github: githubModels,
  huggingface: huggingfaceModels,
  nvidia: nvidiaModels,
  cerebras: cerebrasModels,
  cloudflare: cloudflareModels,
  nebius: nebiusModels,
  novita: novitaModels,
  upstage: upstageModels,
  giteeai: giteeaiModels,
  modelscope: modelscopeModels,
  qiniu: qiniuModels,
  ppio: ppioModels,
  taichu: taichuModels,
  tencentcloud: tencentcloudModels,
  lmstudio: lmstudioModels,
  vllm: vllmModels,
  xinference: xinferenceModels,
  ai21: ai21Models,
  bfl: bflModels,
  infiniai: infiniaiModels,
  jina: jinaModels,
  search1api: search1apiModels,
  higress: higressModels,
};

export const DEFAULT_MODEL_LIST = buildDefaultModelList(PROVIDER_MODELS_MAP);

export function getModelsForProvider(providerId: string): DefaultModelListItem[] {
  return DEFAULT_MODEL_LIST.filter((model) => model.providerId === providerId);
}

export function getEnabledModelsForProvider(providerId: string): DefaultModelListItem[] {
  return DEFAULT_MODEL_LIST.filter((model) => model.providerId === providerId && model.enabled);
}

export function getModel(providerId: string, modelId: string): DefaultModelListItem | undefined {
  return DEFAULT_MODEL_LIST.find(
    (model) => model.providerId === providerId && model.id === modelId,
  );
}

export function getAllEnabledModels(): DefaultModelListItem[] {
  return DEFAULT_MODEL_LIST.filter((model) => model.enabled);
}

export function getModelIdsForProvider(providerId: string): string[] {
  return getModelsForProvider(providerId).map((model) => model.id);
}

export { default as ai21 } from './ai21';
export { default as anthropic } from './anthropic';
export { default as baichuan } from './baichuan';
export { default as bfl } from './bfl';
export { default as cerebras } from './cerebras';
export { default as cloudflare } from './cloudflare';
export { default as cohere } from './cohere';
export { default as dashscope } from './dashscope';
export { default as deepseek } from './deepseek';
export { default as fireworksai } from './fireworksai';
export { default as giteeai } from './giteeai';
export { default as github } from './github';
export { default as google } from './google';
export { default as groq } from './groq';
export { default as higress } from './higress';
export { default as huggingface } from './huggingface';
export { default as hunyuan } from './hunyuan';
export { default as infiniai } from './infiniai';
export { default as internlm } from './internlm';
export { default as jina } from './jina';
export { default as lmstudio } from './lmstudio';
export { default as minimax } from './minimax';
export { default as mistral } from './mistral';
export { default as modelscope } from './modelscope';
export { default as moonshot } from './moonshot';
export { default as nebius } from './nebius';
export { default as novita } from './novita';
export { default as nvidia } from './nvidia';
export { default as openai } from './openai';
export { default as perplexity } from './perplexity';
export { default as ppio } from './ppio';
export { default as qiniu } from './qiniu';
export { default as sambanova } from './sambanova';
export { default as search1api } from './search1api';
export { default as sensenova } from './sensenova';
export { default as silicon } from './silicon';
export { default as spark } from './spark';
export { default as stepfun } from './stepfun';
export { default as taichu } from './taichu';
export { default as tencentcloud } from './tencentcloud';
export { default as togetherai } from './togetherai';
export { default as upstage } from './upstage';
export { default as vllm } from './vllm';
export { default as volcengine } from './volcengine';
export { default as wenxin } from './wenxin';
export { default as xai } from './xai';
export { default as xinference } from './xinference';
export { default as yi } from './yi';
export { default as zhipu } from './zhipu';
