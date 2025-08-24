<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { TranslationPipeline, TranslationSingle } from '@huggingface/transformers';
import { env, pipeline } from '@huggingface/transformers';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const { t } = useI18n();

env.useBrowserCache = true;
env.allowRemoteModels = true;

// State
const inputText = ref('');
const translatedText = ref('');
const error = ref('');
const sourceLang = useQueryParamOrStorage({ name: 'from', storageName: 'translator:from', defaultValue: 'en' });
const targetLang = useQueryParamOrStorage({ name: 'to', storageName: 'translator:to', defaultValue: 'fr' });
const loadingModel = ref(false);
const translating = ref(false);

// Language options
const languageOptions = [
  { label: t('tools.translator.texts.label-afrikaans'), value: 'af' },
  { label: t('tools.translator.texts.label-amharic'), value: 'am' },
  { label: t('tools.translator.texts.label-arabic'), value: 'ar' },
  { label: t('tools.translator.texts.label-azerbaijani'), value: 'az' },
  { label: t('tools.translator.texts.label-basque'), value: 'eu' },
  { label: t('tools.translator.texts.label-belarusian'), value: 'be' },
  { label: t('tools.translator.texts.label-bengali'), value: 'bn' },
  { label: t('tools.translator.texts.label-bulgarian'), value: 'bg' },
  { label: t('tools.translator.texts.label-catalan'), value: 'ca' },
  { label: t('tools.translator.texts.label-chinese'), value: 'zh' },
  { label: t('tools.translator.texts.label-croatian'), value: 'hr' },
  { label: t('tools.translator.texts.label-czech'), value: 'cs' },
  { label: t('tools.translator.texts.label-danish'), value: 'da' },
  { label: t('tools.translator.texts.label-dutch'), value: 'nl' },
  { label: t('tools.translator.texts.label-english'), value: 'en' },
  { label: t('tools.translator.texts.label-estonian'), value: 'et' },
  { label: t('tools.translator.texts.label-finnish'), value: 'fi' },
  { label: t('tools.translator.texts.label-french'), value: 'fr' },
  { label: t('tools.translator.texts.label-galician'), value: 'gl' },
  { label: t('tools.translator.texts.label-georgian'), value: 'ka' },
  { label: t('tools.translator.texts.label-german'), value: 'de' },
  { label: t('tools.translator.texts.label-greek'), value: 'el' },
  { label: t('tools.translator.texts.label-hebrew'), value: 'he' },
  { label: t('tools.translator.texts.label-hindi'), value: 'hi' },
  { label: t('tools.translator.texts.label-hungarian'), value: 'hu' },
  { label: t('tools.translator.texts.label-icelandic'), value: 'is' },
  { label: t('tools.translator.texts.label-indonesian'), value: 'id' },
  { label: t('tools.translator.texts.label-irish'), value: 'ga' },
  { label: t('tools.translator.texts.label-italian'), value: 'it' },
  { label: t('tools.translator.texts.label-japanese'), value: 'ja' },
  { label: t('tools.translator.texts.label-kazakh'), value: 'kk' },
  { label: t('tools.translator.texts.label-korean'), value: 'ko' },
  { label: t('tools.translator.texts.label-latvian'), value: 'lv' },
  { label: t('tools.translator.texts.label-lithuanian'), value: 'lt' },
  { label: t('tools.translator.texts.label-macedonian'), value: 'mk' },
  { label: t('tools.translator.texts.label-malay'), value: 'ms' },
  { label: t('tools.translator.texts.label-norwegian'), value: 'no' },
  { label: t('tools.translator.texts.label-persian'), value: 'fa' },
  { label: t('tools.translator.texts.label-polish'), value: 'pl' },
  { label: t('tools.translator.texts.label-portuguese'), value: 'pt' },
  { label: t('tools.translator.texts.label-romanian'), value: 'ro' },
  { label: t('tools.translator.texts.label-russian'), value: 'ru' },
  { label: t('tools.translator.texts.label-serbian'), value: 'sr' },
  { label: t('tools.translator.texts.label-slovak'), value: 'sk' },
  { label: t('tools.translator.texts.label-slovenian'), value: 'sl' },
  { label: t('tools.translator.texts.label-spanish'), value: 'es' },
  { label: t('tools.translator.texts.label-swahili'), value: 'sw' },
  { label: t('tools.translator.texts.label-swedish'), value: 'sv' },
  { label: t('tools.translator.texts.label-tamil'), value: 'ta' },
  { label: t('tools.translator.texts.label-telugu'), value: 'te' },
  { label: t('tools.translator.texts.label-thai'), value: 'th' },
  { label: t('tools.translator.texts.label-turkish'), value: 'tr' },
  { label: t('tools.translator.texts.label-ukrainian'), value: 'uk' },
  { label: t('tools.translator.texts.label-urdu'), value: 'ur' },
  { label: t('tools.translator.texts.label-vietnamese'), value: 'vi' },
  { label: t('tools.translator.texts.label-welsh'), value: 'cy' },
];

// Cache the loaded model
const translators = new Map<string, TranslationPipeline>();

// Translation logic
async function translateText() {
  if (!inputText.value || sourceLang.value === targetLang.value) {
    return;
  }

  translatedText.value = '';
  error.value = '';

  const modelId = `onnx-community/opus-mt-${sourceLang.value}-${targetLang.value}`;

  // Load model if not already loaded
  if (!translators.has(modelId)) {
    loadingModel.value = true;

    try {
      // @ts-expect-error Probably a Typescript bug 'too complex type'
      translators.set(modelId, await pipeline('translation', modelId) as TranslationPipeline);
    }
    catch (e: any) {
      error.value = `Model loading failed: ${e.toString()}`;
      return;
    }
    finally {
      loadingModel.value = false;
    }
  }

  // Translate
  translating.value = true;
  try {
    const result = await translators.get(modelId)!(inputText.value);
    translatedText.value = (result[0] as TranslationSingle)?.translation_text;
  }
  catch (e: any) {
    error.value = `Translation failed: ${e.toString()}`;
  }
  finally {
    translating.value = false;
  }
}
</script>

<template>
  <NCard :title="t('tools.translator.texts.title-text-translator')" style="max-width: 600px; margin: auto;">
    <NInput v-model:value="inputText" type="textarea" :placeholder="t('tools.translator.texts.placeholder-enter-text-to-translate')" mb-1 />

    <c-select v-model:value="sourceLang" :label="t('tools.translator.texts.label-from')" label-position="left" label-width="70px" :options="languageOptions" :placeholder="t('tools.translator.texts.placeholder-from')" mb-1 />
    <c-select v-model:value="targetLang" :label="t('tools.translator.texts.label-to')" label-position="left" label-width="70px" :options="languageOptions" :placeholder="t('tools.translator.texts.placeholder-to')" mb-1 />

    <n-space justify="center" mb-2 mt-2>
      <NButton type="primary" :disabled="loadingModel || translating" @click="translateText">
        {{ t('tools.translator.texts.tag-translate') }}
      </NButton>
    </n-space>

    <n-space justify="center" mb-3 mt-3>
      <NSpin v-if="loadingModel" size="large" description="Loading translation model..." />
      <NSpin v-if="translating" size="large" description="Translating..." />
    </n-space>

    <c-alert v-if="error" mb-2>
      {{ error }}
    </c-alert>

    <textarea-copyable v-if="translatedText" v-model:value="translatedText" :placeholder="t('tools.translator.texts.placeholder-translation-will-appear-here')" mb-2 />
  </NCard>
</template>
