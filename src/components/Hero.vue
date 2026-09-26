<script setup lang="ts">
import MouseIcon from '@/assets/mouse-icon.svg'
import { links } from '@/components/hero.config'
import Title from '@/components/Title.vue'
</script>

<template>
  <div class="col-[full] row-[hero] grid grid-cols-subgrid content-center gap-y-10 overflow-hidden">
    <div class="@container col-[main]">
      <Title class="text-fluid-32.5">
        Branding & <br />Digital Design <br />
        Studio.
      </Title>
    </div>

    <div
      class="flex gap-x-10 self-end justify-self-start text-fluid-base [writing-mode:vertical-rl]"
    >
      <div v-for="link in links" :key="link.title">
        <a :href="link.href" class="flex items-center gap-4 text-fluid-lg hover:opacity-60">
          <component :is="link.icon" class="size-4" />
          {{ link.title }}
        </a>
      </div>
    </div>

    <div class="col-[main]">
      <MouseIcon class="w-5" />
    </div>
  </div>
</template>
