<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Menu from '@/components/Menu.vue'
import WeBuild from '@/components/WeBuild.vue'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <div class="grid font-main dark:bg-black dark:text-white" :class="$style.wrapper">
    <Header v-model="menuOpen" class="z-99" id="home" />
    <Hero id="hero" />
    <AboutUs class="mb-40" id="about" />
    <WeBuild />

    <Menu :open="menuOpen" @close="menuOpen = false" />
  </div>
</template>

<style module>
/* 1200 - 960 = 240*/
.wrapper {
  grid-template-columns:
    [full] minmax(38px, 1fr) [main] min(calc(100vw - 1080px), 120px) [narrow] minmax(auto, 960px)
    [narrow-end] min(calc(100vw - 1080px), 120px)
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
