<script setup lang="ts">
import Title from '@/components/Title.vue'
import { partners, title } from '@/components/weworkwith.config'
</script>

<template>
  <div class="col-[narrow] grid gap-y-10">
    <Title class="text-center text-fluid-xl uppercase">
      {{ title }}
    </Title>

    <div
      class="mx-auto grid auto-rows-[54px_62px] place-items-center gap-x-4 gap-y-9 text-neutral-600
        md:grid-cols-[repeat(3,minmax(0,240px))] dark:text-[initial]"
    >
      <template v-for="partner in partners" :key="partner.id">
        <component v-if="partner.icon" :is="partner.icon" :key="partner.id" class="h-full w-full" />
        <img
          v-if="partner.img"
          :src="partner.img"
          :key="partner.id"
          class="h-full w-1/2 object-contain"
        />
      </template>
    </div>

    <a
      href="#"
      class="border-px place-self-center border-b border-dotted border-current text-fluid-sm
        uppercase hover:border-transparent hover:opacity-80"
      >View Our Work</a
    >
  </div>
</template>
