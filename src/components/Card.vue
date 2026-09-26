<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon: HTMLElement
}>()
</script>

<template>
  <div class="grid gap-y-4 rounded-lg bg-xgray-900 p-4 pb-9 text-center text-white">
    <div class="grid   place-items-center bg-xslate-950 text-white" :class="[$style.clip, $style.banner]">
      <div class="h-full w-full place-self-center rounded bg-xred-700">
      </div>
      <component :is="props.icon" class="max-w-9.5" />
    </div>

    <h3 class="text-fluid-lg uppercase leading-7.5">{{ props.title }}</h3>
    <p class="mx-auto max-w-50 text-fluid-lg leading-6">{{ props.description }}</p>
  </div class="">
</template>

<style module>
.banner {
  grid-template-columns: minmax(10px,auto) minmax(auto,80px) minmax(10px,auto);
  grid-template-rows: minmax(0,30px) 80px minmax(0,calc(30px + var(--height) / 2));
  grid-template-areas: '. . .' '. main .' '. . .';

  & > * {
    grid-area: main;
    width: 100%;
    height: 100%;
  }
}

.clip{
  --height: 18px;
  clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - var(--height)), 70% 100%, 30% 100%, 0% calc(100% - var(--height)));
}
</style>
