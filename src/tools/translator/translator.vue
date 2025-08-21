<script setup lang="ts">
import type { TranslationPipeline, TranslationSingle } from '@huggingface/transformers';
import { pipeline } from '@huggingface/transformers';

// State
const inputText = ref('');
const translatedText = ref('');
const error = ref('');
const sourceLang = ref('en');
const targetLang = ref('fr');
const loadingModel = ref(false);
const translating = ref(false);

// Language options
const languageOptions = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Amharic', value: 'am' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Azerbaijani', value: 'az' },
  { label: 'Basque', value: 'eu' },
  { label: 'Belarusian', value: 'be' },
  { label: 'Bengali', value: 'bn' },
  { label: 'Bulgarian', value: 'bg' },
  { label: 'Catalan', value: 'ca' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Croatian', value: 'hr' },
  { label: 'Czech', value: 'cs' },
  { label: 'Danish', value: 'da' },
  { label: 'Dutch', value: 'nl' },
  { label: 'English', value: 'en' },
  { label: 'Estonian', value: 'et' },
  { label: 'Finnish', value: 'fi' },
  { label: 'French', value: 'fr' },
  { label: 'Galician', value: 'gl' },
  { label: 'Georgian', value: 'ka' },
  { label: 'German', value: 'de' },
  { label: 'Greek', value: 'el' },
  { label: 'Hebrew', value: 'he' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Hungarian', value: 'hu' },
  { label: 'Icelandic', value: 'is' },
  { label: 'Indonesian', value: 'id' },
  { label: 'Irish', value: 'ga' },
  { label: 'Italian', value: 'it' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Kazakh', value: 'kk' },
  { label: 'Korean', value: 'ko' },
  { label: 'Latvian', value: 'lv' },
  { label: 'Lithuanian', value: 'lt' },
  { label: 'Macedonian', value: 'mk' },
  { label: 'Malay', value: 'ms' },
  { label: 'Norwegian', value: 'no' },
  { label: 'Persian', value: 'fa' },
  { label: 'Polish', value: 'pl' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Romanian', value: 'ro' },
  { label: 'Russian', value: 'ru' },
  { label: 'Serbian', value: 'sr' },
  { label: 'Slovak', value: 'sk' },
  { label: 'Slovenian', value: 'sl' },
  { label: 'Spanish', value: 'es' },
  { label: 'Swahili', value: 'sw' },
  { label: 'Swedish', value: 'sv' },
  { label: 'Tamil', value: 'ta' },
  { label: 'Telugu', value: 'te' },
  { label: 'Thai', value: 'th' },
  { label: 'Turkish', value: 'tr' },
  { label: 'Ukrainian', value: 'uk' },
  { label: 'Urdu', value: 'ur' },
  { label: 'Vietnamese', value: 'vi' },
  { label: 'Welsh', value: 'cy' },
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
      translators.set(modelId, await pipeline('translation', modelId));
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
  <NCard title="Text Translator" style="max-width: 600px; margin: auto;">
    <NInput v-model:value="inputText" type="textarea" placeholder="Enter text to translate..." mb-1 />

    <c-select v-model:value="sourceLang" label="From:" label-position="left" label-width="70px" :options="languageOptions" placeholder="From" mb-1 />
    <c-select v-model:value="targetLang" label="To:" label-position="left" label-width="70px" :options="languageOptions" placeholder="To" mb-1 />

    <n-space justify="center" mb-2 mt-2>
      <NButton type="primary" :disabled="loadingModel || translating" @click="translateText">
        Translate
      </NButton>
    </n-space>

    <div mb-3 mt-3>
      <NSpin v-if="loadingModel" size="large">
        Loading translation model...
      </NSpin>
      <NSpin v-if="translating" size="large">
        Translating...
      </NSpin>
    </div>

    <c-alert v-if="error" mb-2>
      {{ error }}
    </c-alert>

    <textarea-copyable v-if="translatedText" v-model:value="translatedText" placeholder="Translation will appear here..." mb-2 />
  </NCard>
</template>
