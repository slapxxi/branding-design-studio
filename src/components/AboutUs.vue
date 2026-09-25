<script setup lang="ts">
import ArrowRightIcon from '@/assets/arrow-right-icon.svg'
import { slides, text1, text2, title } from '@/components/about.config'
import Button from '@/components/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PlayShowreel from '@/components/PlayShowreel.vue'
</script>

<template>
  <div class="col-[main/full] grid grid-cols-subgrid gap-y-15">
    <div
      class="col-[main-end] inline-grid aspect-square cursor-pointer grid-cols-[minmax(auto,28px)]
        place-items-center place-self-start bg-neutral-800 p-2 hover:opacity-50"
    >
      <ArrowRightIcon class="w-full"></ArrowRightIcon>
    </div>

    <div class="col-[main/full] row-2 select-none">
      <Swiper slidesPerView="auto" :spaceBetween="40" wrapperClass="items-center">
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <img :src="slide.img" :alt="slide.alt" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="pointer-events-none z-10 col-[main] row-2 place-self-center select-none">
      <PlayShowreel class="size-39" />
    </div>

    <div
      class="col-[main] grid justify-between gap-x-4 gap-y-7 md:max-w-236.25
        md:grid-cols-[repeat(2,minmax(auto,400px))] md:gap-y-0"
    >
      <h2 class="font-main text-[80px] leading-22 uppercase">{{ title }}</h2>
      <div class="grid auto-rows-min gap-y-7.5 self-end">
        <p class="h">{{ text1 }}</p>
        <p class="h">{{ text2 }}</p>
        <Button class="justify-self-start">Meet the team</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide:nth-child(odd) {
  width: 500px;
}

.swiper-slide:nth-child(even) {
  width: 880px;
}
</style>
