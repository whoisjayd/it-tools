<script setup lang="ts">
const wordWrap = ref(false);
</script>

<template>
  <div w-full>
    <n-space justify="center" mb-3>
      <n-checkbox v-model:checked="wordWrap">
        Word Wrap?
      </n-checkbox>
    </n-space>
    <c-card w-full important:flex-1 important:pa-0>
      <c-diff-editor :options="{ wordWrap: wordWrap ? 'on' : 'off' }" />
    </c-card>
  </div>
</template>
