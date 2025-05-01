<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton, NCard, NSelect } from 'naive-ui';
import * as XLSX from 'xlsx';
import yaml from 'yaml';

export default defineComponent({
  components: { NCard, NButton, NSelect },
  setup() {
    const data = ref<any[]>([]);
    const convertedData = ref<string>('');
    const selectedFormat = ref<string>('json');
    const formatLanguage = ref<string>('json');
    const tableName = ref<string>('TableName');

    const formats = [
      { label: 'JSON', value: 'json' },
      { label: 'YAML', value: 'yaml' },
      { label: 'SQL INSERT', value: 'sql' },
      { label: 'CSV (comma)', value: 'csv' },
      { label: 'CSV (semicolon)', value: 'csv_semicolon' },
      { label: 'CSV (tab)', value: 'tsv' },
      { label: 'Markdown', value: 'markdown' },
    ];

    const escapeSQL = (value: any) =>
      typeof value === 'string' ? `'${value.replace(/'/g, '\'\'')}'` : value;

    const escapeCSV = (value: any) =>
      `"${String(value).replace(/"/g, '""')}"`;

    const escapeMarkdown = (value: any) =>
      String(value).replace(/\|/g, '\\|').replace(/`/g, '\\`');

    const handleFileUpload = async (file: File) => {
      const workbook = XLSX.read(await file.arrayBuffer(), { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      data.value = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    };

    const convertFile = () => {
      if (!data.value.length || !selectedFormat.value) {
        return;
      }

      switch (selectedFormat.value) {
        case 'json':
          formatLanguage.value = 'json';
          convertedData.value = JSON.stringify(data.value, null, 2);
          break;
        case 'yaml':
          formatLanguage.value = 'yaml';
          convertedData.value = yaml.stringify(data.value);
          break;
        case 'sql':
          formatLanguage.value = 'sql';
          convertedData.value = data.value.map((row) => {
            const keys = Object.keys(row).map(k => k?.replace(/\s/g, '')).join(', ');
            const values = Object.values(row).map(escapeSQL).join(', ');
            return `INSERT INTO ${tableName.value} (${keys}) VALUES (${values});`;
          }).join('\n');
          break;
        case 'csv':
        case 'tsv':
        case 'csv_semicolon':
          formatLanguage.value = 'text';
          // eslint-disable-next-line no-case-declarations
          let sep = ',';
          if (selectedFormat.value === 'tsv') {
            sep = '\t';
          }
          else if (selectedFormat.value === 'csv_semicolon') {
            sep = ';';
          }
          convertedData.value = [
            Object.keys(data.value[0]).map(escapeCSV).join(sep),
            ...data.value.map(row => Object.values(row).map(escapeCSV).join(sep)),
          ].join('\n');
          break;
        case 'markdown':
          formatLanguage.value = 'markdown';
          convertedData.value
            = `| ${Object.keys(data.value[0]).map(escapeMarkdown).join(' | ')} |\n| ${Object.keys(data.value[0]).map(() => '---').join(' | ')} |\n${
             data.value.map(row => `| ${Object.values(row).map(escapeMarkdown).join(' | ')} |`).join('\n')}`;
          break;
      }
    };

    return { handleFileUpload, convertFile, selectedFormat, formats, convertedData, data, tableName, formatLanguage };
  },
});
</script>

<template>
  <NCard title="XLSX Converter">
    <c-file-upload
      title="Drag and drop a XLSX here, or click to select a file"
      accept=".xlsx"
      mb-3
      @file-upload="handleFileUpload"
    />

    <NFormItem label="Select output format:" label-placement="left">
      <NSelect v-model:value="selectedFormat" :options="formats" placeholder="Select format" />
    </NFormItem>

    <c-input-text v-if="selectedFormat === 'sql'" v-model:value="tableName" label="Table Name:" label-placement="left" />

    <div mt-3 flex justify-center>
      <NButton :disabled="!data.length" @click="convertFile">
        Convert
      </NButton>
    </div>
    <c-card v-if="convertedData" title="Converted data">
      <textarea-copyable :value="convertedData" :language="formatLanguage" />
    </c-card>
  </NCard>
</template>
