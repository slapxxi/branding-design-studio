<script setup lang="ts">
import ArrowLeftIcon from '@/assets/arrow-left-icon.svg'
import ArrowRightIcon from '@/assets/arrow-right-icon.svg'
import { slides, text1, text2, title } from '@/components/about.config'
import Button from '@/components/Button.vue'
import IconButton from '@/components/IconButton.vue'
import PlayShowreel from '@/components/PlayShowreel.vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Navigation]
</script>

<template>
  <div class="col-[main/full] grid grid-cols-subgrid gap-y-15">
    <IconButton class="swiper-button-prev col-[main]">
      <ArrowLeftIcon class="w-full"></ArrowLeftIcon>
    </IconButton>

    <IconButton class="swiper-button-next col-[main-end]">
      <ArrowRightIcon class="w-full"></ArrowRightIcon>
    </IconButton>

    <div class="col-[main/full] row-2 select-none">
      <Swiper
        slidesPerView="auto"
        :spaceBetween="40"
        :modules="modules"
        wrapperClass="items-center"
        :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <img :src="slide.img" :alt="slide.alt" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="pointer-events-none z-10 col-[main] row-2 place-self-center select-none">
      <PlayShowreel class="size-39" />
    </div>

    <div
      class="col-[narrow] grid gap-x-4 gap-y-7 md:grid-cols-[minmax(auto,545px)_fit-content(428px)]
        md:gap-y-0"
    >
      <h2 class="max-w-100 text-fluid-7xl uppercase">
        {{ title }}
      </h2>
      <div class="grid gap-y-7.5 self-end">
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
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
