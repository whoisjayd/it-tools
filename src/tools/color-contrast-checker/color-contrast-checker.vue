<script setup lang="ts">
import { contrastRatio, passesWCAG } from 'wcag-contrast-utils';
import { useQueryParam } from '@/composable/queryParams';

const forecolor = useQueryParam({ name: 'fg', defaultValue: '#000' });
const backcolor = useQueryParam({ name: 'bg', defaultValue: '#fff' });

const result = computed(() => {
  try {
    const constrastValue = contrastRatio(forecolor.value, backcolor.value);
    const wcagLevel = passesWCAG(constrastValue);

    return {
      constrastValue,
      wcagLevel,
      error: '',
    };
  }
  catch (e: any) {
    return {
      constrastValue: -1,
      wcagLevel: '',
      error: e.toString(),
    };
  }
});
</script>

<template>
  <div max-w-600px>
    <n-form-item
      label="Forecolor:"
      label-placement="left"
      mb-1
    >
      <n-color-picker
        v-model:value="forecolor"
        :modes="['hex']"
        :show-alpha="false"
      />
    </n-form-item>
    <n-form-item
      label="Backcolor:"
      label-placement="left"
      mb-1
    >
      <n-color-picker
        v-model:value="backcolor"
        :modes="['hex']"
        :show-alpha="false"
      />
    </n-form-item>

    <n-divider />

    <c-alert v-if="result.error">
      {{ result.error }}
    </c-alert>

    <input-copyable v-if="!result.error" readonly label="Constrast:" label-width="100px" label-position="left" :value="result.constrastValue" mb-2 />
    <input-copyable v-if="!result.error" readonly label="Level:" label-width="100px" label-position="left" :value="result.wcagLevel" />
  </div>
</template>
