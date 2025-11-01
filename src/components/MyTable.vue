<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{
  columns: { key: string; label: string }[]
  data: Record<string, any>[]
}>()
</script>

<style scoped>
table {
  border: 2px solid black; 
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid black;
}

th {
  font-size: 1.5rem;
  background-color: lightpink;
}

td {
  font-size: 1.25rem;
  text-align: center;
  padding: 0.5rem 0.25rem;
}

tbody tr:nth-child(odd) { background-color: lightblue; }
tbody tr:nth-child(even) { background-color: lightgreen; }
</style>