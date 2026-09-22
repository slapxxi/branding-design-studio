<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="grid font-main dark:bg-black dark:text-white" :class="$style.wrapper">
    <Header v-model="menuOpen" />
    <Hero />

    <div
      class="sticky top-0 z-10 col-[full] row-[menu] grid min-h-dvh grid-cols-subgrid backdrop-blur-2xl dark:bg-black/60"
      :class="{
        'opacity-100 pointer-events-auto': menuOpen,
        'opacity-0 pointer-events-none': !menuOpen,
      }"
    >
      <div class="col-[main] p-2">
        <button @click="toggleMenu">Close Menu</button>
      </div>
    </div>
  </div>
</template>

<style module>
.wrapper {
  grid-template-columns:
    [full] minmax(28px, 1fr) [main] minmax(auto, 1200px)
    [main-end] minmax(28px, 1fr) [full-end];
  grid-template-rows: [menu header] min-content [header-end hero] 1fr [menu-end hero-end];
}
</style>
