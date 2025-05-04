<script lang="ts" setup>
import * as XLSX from 'xlsx';
import { objectArrayToData } from './excel-to-data.service';
import type { ExportFormat } from './excel-to-data.service';

const data = ref<any[]>([]);
const convertedData = ref<string>('');
const selectedFormat = ref<string>('json');
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

async function handleFileUpload(file: File) {
  const workbook = XLSX.read(await file.arrayBuffer(), { type: 'binary' });
  const sheetName = workbook.SheetNames[0];
  data.value = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

function convertFile() {
  if (!data.value.length || !selectedFormat.value) {
    return;
  }

  convertedData.value = objectArrayToData(data.value, selectedFormat.value as ExportFormat, tableName.value);
};
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
      <textarea-copyable :value="convertedData" :language="selectedFormat" />
    </c-card>
  </NCard>
</template>
