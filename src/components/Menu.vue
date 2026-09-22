<script setup lang="ts">
const props = defineProps<{
  open: boolean
}>()
</script>

<template>
  <div
    class="sticky top-0 z-10 col-[full] row-[menu] grid min-h-dvh grid-cols-subgrid grid-rows-subgrid backdrop-blur-2xl dark:bg-black/60"
    :class="{
      'opacity-100 pointer-events-auto': open,
      'opacity-0 pointer-events-none': !open,
    }"
  >
    <div class="col-[main] row-[hero] p-2">Menu</div>
  </div>
</template>
