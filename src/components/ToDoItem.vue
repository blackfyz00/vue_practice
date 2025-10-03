<script setup lang="ts">
const props = defineProps<{
  task: { name: string; completed: boolean }
}>()

const emit = defineEmits<{
  (e: 'change-status', value: { name: string; completed: boolean }): void
}>()

const onCheck = (event: Event) => {
  const status = (event.target as HTMLInputElement).checked
  emit('change-status', {
    name: props.task.name,
    completed: status
  })
}
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="task.completed"
      @change="onCheck"
    />
    <span :class="{ 'completed': task.completed }">
      {{ task.name }}
    </span>
  </li>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
