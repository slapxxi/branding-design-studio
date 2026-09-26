<script setup lang="ts">
import { title, cards } from '@/components/build.config'
import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <div class="col-[narrow] grid gap-y-10 md:gap-y-20" id="build">
    <Title class="max-w-140 text-fluid-7xl uppercase">{{ title }}</Title>

    <div class="grid w-full max-w-102 gap-x-2 gap-y-2 md:max-w-[initial] md:grid-cols-3">
      <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :icon="card.icon"
      />
    </div>
  </div>
</template>
