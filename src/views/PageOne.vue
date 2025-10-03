<script setup lang="ts">
import MyTable from '@/components/MyTable.vue'

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Имя' },
  { key: 'role', label: 'Роль' }
]

const data = [
  { id: 1, name: 'Анна', role: 'Разработчик' },
  { id: 2, name: 'Борис', role: 'Дизайнер' },
  { id: 3, name: 'Вера', role: 'Тестировщик' }
]
</script>

<template>
  <div>
    <h2>Страница 1: Команда разработки</h2>
    <MyTable :data="data" :columns="columns" />
  </div>
</template>
