<script setup lang="ts">
import MouseIcon from '@/assets/mouse-icon.svg'
import { links } from '@/components/hero.config'
</script>

<template>
  <div class="col-[full] grid grid-cols-subgrid content-center gap-y-10 overflow-hidden">
    <div class="@container col-[main]">
      <h3 class="text-fluid-32.5 leading-[clamp(4rem,3.75rem+7.5cqi,8.125rem)]">
        Branding & <br />Digital Design <br />
        Studio.
      </h3>
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
