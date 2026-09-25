<script setup lang="ts">
import { links } from '@/components/menu.config'

const props = defineProps<{
  open: boolean
}>()
</script>

<template>
  <div
    class="sticky top-0 z-10 col-[full] row-[menu] grid min-h-dvh grid-cols-subgrid
      grid-rows-subgrid backdrop-blur-2xl dark:bg-black/60"
    :class="{
      'opacity-100 pointer-events-auto': open,
      'opacity-0 pointer-events-none': !open,
    }"
  >
    <div class="col-[main] row-[hero] grid py-8">
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        class="text-fluid-7xl"
        @click="$emit('close')"
      >
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
