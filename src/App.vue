<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="grid min-h-screen gap-x-10 dark:bg-black dark:text-white" :class="$style.wrapper">
    <Header />
  </div>
</template>

<style module>
.wrapper {
  grid-template-columns: [full] 1fr [main] minmax(auto, 1200px) [main-end] 1fr [full-end];
}
</style>
