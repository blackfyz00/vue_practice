<script setup lang="ts">
import MyTable from '@/components/MyTable.vue'

const columns = [
  { key: 'category', label: 'Категория' },
  { key: 'awardDate', label: 'Дата вручения' },
  { key: 'grantAmount', label: 'Стоимость гранта' }
]

const data = [
  { category: 'Физика', awardDate: '10 декабря', grantAmount: '1 млн. $ США' },
  { category: 'Химия', awardDate: '10 декабря', grantAmount: '1 млн. $ США' },
  { category: 'Литература', awardDate: '10 декабря', grantAmount: '1 млн. $ США' }
]
</script>

<template>
  <div>
    <h1>Список нобелевских премий</h1>
    <MyTable :data="data" :columns="columns" />
  </div>
</template>