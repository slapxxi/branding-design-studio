<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
</script>

<template>
  <div class="grid min-h-screen font-main dark:bg-black dark:text-white" :class="$style.wrapper">
    <Header />
    <Hero />
  </div>
</template>

<style module>
.wrapper {
  grid-template-columns:
    [full] minmax(28px, 1fr) [main] minmax(auto, 1200px)
    [main-end] minmax(28px, 1fr) [full-end];
  grid-template-rows: min-content 1fr;
}
</style>
