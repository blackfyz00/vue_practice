<script setup lang="ts">
import { defineProps } from 'vue'

interface Column {
  key: string
  label: string
}

const props = defineProps<{
  data: Record<string, any>[]
  columns: Column[]
}>()
</script>

<template>
  <table border="1" style="border-collapse: collapse; width: 100%; margin: 20px 0;">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key" style="padding: 10px; background: #f0f0f0;">
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="col in columns" :key="col.key" style="padding: 10px; text-align: center;">
          {{ row[col.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
