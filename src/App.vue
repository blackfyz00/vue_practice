<script setup lang="ts">
import {ref} from 'vue'
import ToDoItem from './components/ToDoItem.vue'
const tasks = ref<string[]>([
  'task1',
  'task2',
  'task3',
])

const inputValue = ref<string>('')

const onCLick = () => {
  if (inputValue.value === ''){
    return
  }
  tasks.value.push(inputValue.value)
  inputValue.value = ''
  }
</script>

<template>
  <input type = "text" v-model = "inputValue">
  <button @click = "onCLick">Добавить задачу</button>

  <hr>
  <ul>
    <ToDoItem
      v-for = "task in tasks"
      :key = "task"
      :task= "task"
      ></ToDoItem>
  </ul>

</template>

<style scoped></style>
