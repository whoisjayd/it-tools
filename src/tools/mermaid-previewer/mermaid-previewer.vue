<script setup lang="ts">
import VueMermaidString from 'vue-mermaid-string';
import { useStyleStore } from '@/stores/style.store';
import useDebouncedRef from '@/composable/debouncedref';

const diagram = useDebouncedRef(`flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `, 500);
const styleStore = useStyleStore();
</script>

<template>
  <div flex flex-col gap-2 md:flex-row>
    <c-card title="Input Mermaid" mb-2 flex-1>
      <c-input-text
        v-model:value="diagram"
        label="Mermaid Content"
        multiline
        placeholder="Put your mermaid content here..."
        rows="15"
        mb-2
      />
    </c-card>

    <c-card title="Preview" mb-2 flex-1>
      <VueMermaidString class="mermaid-viewer" :value="diagram" :options="{ darkMode: styleStore.isDarkTheme }" />
    </c-card>
  </div>
</template>

<style scoped lang="less">
::v-deep(.mermaid-viewer svg) {
  margin-left: auto;
  margin-right: auto;
  display:block;
}
</style>
