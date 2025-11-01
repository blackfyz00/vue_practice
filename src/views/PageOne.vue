<script setup lang="ts">
import MyTable from '@/components/MyTable.vue'

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'birthDate', label: 'Дата рождения' },
  { key: 'prizes', label: 'Число премий' }
]

const data = [
  { name: 'Вильгельм Конрад Рентген', birthDate: '27 марта 1845', prizes: 'Одна (Физика)' },
  { name: 'Хидэки Юкава', birthDate: '23 января 1907', prizes: 'Одна (Физика)' },
  { name: 'Феликс Блох', birthDate: '23 октября 1905', prizes: 'Одна (Физика)' }
]
</script>

<template>
  <div>
    <h1>Список нобелевских лауреатов</h1>
    <MyTable :data="data" :columns="columns" />
  </div>
</template>