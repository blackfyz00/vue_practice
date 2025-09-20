<script setup lang ="ts">
const props = defineProps<{
  task: string
}>()
</script>

<template>
  <li>
    {{props.task}}
  </li>
</template>

<style scoped></style>
