<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Menu from '@/components/Menu.vue'
import { ref } from 'vue'
import AboutUs from '@/components/AboutUs.vue'

const menuOpen = ref(false)
</script>

<template>
  <div class="grid font-main dark:bg-black dark:text-white" :class="$style.wrapper">
    <Header v-model="menuOpen" class="z-20" />
    <Hero />
    <Menu :open="menuOpen" />
    <AboutUs class="mb-40" />
  </div>
</template>

<style module>
.wrapper {
  grid-template-columns:
    [full] minmax(38px, 1fr) [main] minmax(auto, 1200px)
    [main-end] minmax(38px, 1fr) [full-end];
  grid-template-rows: [menu header] min-content [header-end hero] 1fr [menu-end hero-end];

  &::after {
    display: block;
    content: '';
    grid-column: full;
    grid-row: menu;
    min-height: 100dvh;
    opacity: 0;
    pointer-events: none;
  }
}
</style>
