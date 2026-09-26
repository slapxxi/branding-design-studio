<script setup lang="ts">
const props = defineProps<{ open?: boolean }>()
</script>

<template>
  <svg fill="currentColor" viewBox="0 0 34 16">
    <template v-if="props.open">
      <path d="M34 14 0 0v1.73l34 14z" />
      <path d="m34 .84-34 13v1.73l34-13z" />
    </template>
    <path v-else d="M34 0H0v1.73h34zM34 6.92H0v1.73h34zM34 13.84H0v1.73h34z" />
  </svg>
</template>
