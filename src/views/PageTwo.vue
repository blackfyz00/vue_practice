<script setup lang="ts">
import MyTable from '@/components/MyTable.vue'

const columns = [
  { key: 'product', label: 'Товар' },
  { key: 'price', label: 'Цена (₽)' },
  { key: 'stock', label: 'На складе' }
]

const data = [
  { product: 'Ноутбук', price: 85000, stock: 12 },
  { product: 'Мышь', price: 1500, stock: 200 },
  { product: 'Клавиатура', price: 4000, stock: 80 }
]
</script>

<template>
  <div>
    <h2>Страница 2: Склад</h2>
    <MyTable :data="data" :columns="columns" />
  </div>
</template>
