<script setup lang="ts">
import { testimonials, title } from '@/components/testimonials.config'
import Title from '@/components/Title.vue'
import type { Swiper as SwiperType } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const activeIndex = ref(0)
const swiperInstance = ref<SwiperType | null>(null)

const handleSlideChange = (swiper: SwiperType) => {
  activeIndex.value = swiper.activeIndex
}

const handleSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}
</script>

<template>
  <div class="col-[full] overflow-hidden md:col-[narrow]">
    <Title class="mb-20 text-center text-fluid-5xl md:text-fluid-7xl">{{ title }}</Title>

    <div>
      <Swiper :slidesPerView="1" @swiper="handleSwiper" @slideChange="handleSlideChange">
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="grid place-items-center gap-y-7 text-center">
            <img :src="testimonial.img" alt="" class="size-25 rounded" />
            <p class="max-w-145 text-fluid-3xl uppercase" :class="$style.quote">
              {{ testimonial.text }}
            </p>
            <div class="text-fluid-base text-xneutral-400 uppercase">
              <div>{{ testimonial.name }}</div>
              <div>{{ testimonial.title }}</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div
      class="mt-8 grid grid-cols-[repeat(auto-fit,14px)] grid-rows-[14px] justify-center gap-x-2.5"
    >
      <button
        v-for="(_, index) in testimonials.length"
        :key="index"
        class="h-full w-full bg-neutral-300 hover:bg-white/40 dark:bg-white/20"
        :class="{ 'dark:bg-white/100 bg-xred-700': activeIndex === index }"
        @click="swiperInstance?.slideTo(index)"
      />
    </div>
  </div>
</template>

<style module>
.quote {
  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
}
</style>
