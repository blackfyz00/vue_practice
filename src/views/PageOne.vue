<script setup lang="ts">
import MyTable from '@/components/MyTable.vue'
import { NobelService } from '@/services/nobelService'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { NobelLaureate } from '@/interfaces/nobel'

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'birthDate', label: 'Дата рождения' },
  { key: 'prizes', label: 'Число премий' }
]

const data = ref<Record<string, any>[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

// Пагинация
const currentPage = ref(1)
const pageSize = ref(10)
const totalItems = ref(0)

// Фильтры
const searchName = ref('')
const searchYear = ref('')

const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const offset = (currentPage.value - 1) * pageSize.value
    const response = await NobelService.getLaureates(
      offset,
      pageSize.value,
      searchName.value.trim(),
      searchYear.value ? Number(searchYear.value) : undefined
    )

    data.value = response.laureates.map((l: NobelLaureate) => ({
      name: l.fullName.en,
      birthDate: l.birth?.date ? new Date(l.birth.date).toLocaleDateString('ru-RU') : 'Неизвестно',
      prizes: `${l.nobelPrizes.length} (${l.nobelPrizes.map(p => p.category.en).join(', ')})`
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

watch([currentPage, searchName, searchYear], () => {
  if (debounceTimer) clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    currentPage.value = 1
    fetchData()
  }, 300)
})

onUnmounted(() => {
  if (debounceTimer) clearTimeout(debounceTimer)
})

// Загрузка при монтировании
onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="container">
    <h1>Список нобелевских лауреатов</h1>

    <!-- Фильтры -->
    <div class="filters">
      <input
        v-model="searchName"
        placeholder="Поиск по имени..."
        class="filter-input"
      />
      <input
        v-model="searchYear"
        type="number"
        placeholder="Год премии..."
        class="filter-input"
      />
    </div>

    <!-- Ошибка / Загрузка -->
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="loading">Загрузка...</p>

    <!-- Таблица -->
    <MyTable :data="data" :columns="columns" />

    <!-- Пагинация -->
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
.container {
  padding: 1rem;
}

.filters {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}

.filter-input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error {
  color: red;
  font-weight: bold;
}
</style>