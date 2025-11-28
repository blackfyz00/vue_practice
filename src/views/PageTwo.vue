<script setup lang="ts">
import MyTable from '@/components/MyTable.vue'
import { NobelPrizeService } from '@/services/nobelPrizeService'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { NobelPrize } from '@/interfaces/nobel'

const columns = [
  { key: 'category', label: 'Категория' },
  { key: 'awardDate', label: 'Дата вручения' },
  { key: 'grantAmount', label: 'Стоимость гранта' }
]

const data = ref<Record<string, any>[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const currentPage = ref(1)
const pageSize = ref(10)
const totalItems = ref(0)

const searchYear = ref('')

const fetchData = async () => {
  loading.value = true
  error.value = null
  const yearInput = searchYear.value.trim()
  const yearParam = yearInput && !isNaN(Number(yearInput)) ? Number(yearInput) : undefined
  try {
    const offset = (currentPage.value - 1) * pageSize.value
    const response = await NobelPrizeService.getPrizes(
      offset,
      pageSize.value,
      yearParam 
    )

    data.value = response.nobelPrizes.map((p: NobelPrize) => ({
      category: p.category.en,
      awardDate: p.dateAwarded ? new Date(p.dateAwarded).toLocaleDateString('ru-RU') : 'Неизвестно',
      grantAmount: p.prizeAmount ? `${(p.prizeAmount / 1_000_000).toFixed(2)} млн SEK` : '—'
    }))

    totalItems.value = response.meta.total
  } catch (err) {
    error.value = 'Ошибка загрузки данных'
    console.error(err)
  } finally {
    loading.value = false
  }
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null

// Только при поиске по году — сбрасываем на 1-ю страницу с дебаунсом
watch(searchYear, () => {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    currentPage.value = 1
    fetchData()
  }, 300)
})

// При смене страницы — сразу загружаем
watch(currentPage, () => {
  fetchData()
})

onUnmounted(() => {
  if (debounceTimer) clearTimeout(debounceTimer)
})

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="container">
    <h1>Список нобелевских премий</h1>

    <div class="filters">
      <input
        v-model="searchYear"
        type="number"
        placeholder="Год премии..."
        class="filter-input"
      />
    </div>

    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="loading">Загрузка...</p>

    <MyTable :data="data" :columns="columns" />

    <div class="pagination" v-if="totalItems > pageSize">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
      >Назад</button>

      <span>Страница {{ currentPage }} из {{ Math.ceil(totalItems / pageSize) }}</span>

      <button
        @click="currentPage++"
        :disabled="currentPage * pageSize >= totalItems"
      >Вперед</button>
    </div>
  </div>
</template>

<style scoped>
/* тот же стиль, что и раньше */
</style>