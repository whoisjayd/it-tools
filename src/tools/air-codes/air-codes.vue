<script setup lang="ts">
import { findAirline, findAirport } from 'aircodes';
import SpanCopyable from '@/components/SpanCopyable.vue';

const airlineQuery = ref('');
const airportQuery = ref('');
const resultAirline = computed(() => airlineQuery.value === '' ? [] : findAirline(airlineQuery.value));
const resultAirport = computed(() => airportQuery.value === '' ? [] : findAirport(airportQuery.value));
</script>

<template>
  <div>
    <c-card title="Airline search" mb-1>
      <n-space>
        <n-form-item label="Airline query">
          <n-input v-model:value="airlineQuery" />
        </n-form-item>
      </n-space>

      <n-divider />

      <div v-for="airline in resultAirline" :key="airline.iata">
        <n-form-item label="IATA">
          <SpanCopyable :value="airline.iata" />
        </n-form-item>
        <n-form-item label="ICAO">
          <SpanCopyable :value="airline.icao" />
        </n-form-item>
        <n-form-item label="Name">
          <SpanCopyable :value="airline.name" />
        </n-form-item>
        <n-form-item label="Logo">
          <img width="100" :alt="airline.name" :src="airline.logo">
        </n-form-item>
      </div>
    </c-card>

    <c-card title="Airport search">
      <n-space>
        <n-form-item label="Airport query">
          <n-input v-model:value="airportQuery" />
        </n-form-item>
      </n-space>

      <n-divider />

      <div v-for="airport in resultAirport" :key="airport.iata">
        <n-form-item label="IATA">
          <SpanCopyable :value="airport.iata" />
        </n-form-item>
        <n-form-item label="ICAO">
          <SpanCopyable :value="airport.icao" />
        </n-form-item>
        <n-form-item label="Name">
          <SpanCopyable :value="airport.name" />
        </n-form-item>
        <n-form-item label="City">
          <SpanCopyable :value="airport.city" />
        </n-form-item>
        <n-form-item label="State">
          <SpanCopyable :value="airport.state" />
        </n-form-item>
        <n-form-item label="Country">
          <SpanCopyable :value="airport.country" />
        </n-form-item>
      </div>
    </c-card>
  </div>
</template>
