<script setup lang="ts">
import Logo from '@/assets/logo.svg'
import Button from '@/components/Button.vue'
import Cart from '@/components/Cart.vue'
import MenuIcon from '@/components/MenuIcon.vue'

const model = defineModel<boolean>()

const toggleMenu = () => {
  model.value = !model.value
}
</script>

<template>
  <header
    class="sticky top-0 row-[header] z-10 col-[full] grid grid-cols-subgrid border-b border-white/15
      bg-white/60 backdrop-blur-xl dark:bg-black/60"
  >
    <div
      class="col-[main] grid grid-cols-[minmax(0,1fr)_min-content_minmax(0,1fr)] items-center
        gap-x-4"
    >
      <div
        class="grid grid-cols-[minmax(14px,48px)_auto_auto] items-center text-fluid-base uppercase
          md:gap-x-5"
      >
        <div>
          <Logo class="w-8" />
        </div>
        <div class="hidden md:block">
          Branding & <br />
          Design Studio
        </div>
        <div class="hidden md:block">
          Double Bay 2028, <br />
          New York
        </div>
      </div>

      <button
        class="mx-auto cursor-pointer border-r border-l border-white/15 px-7 py-9.5
          hover:bg-white/10"
        :class="{ 'bg-white/20': model }"
        @click="toggleMenu"
      >
        <MenuIcon class="w-8.5" :open="model" />
      </button>

      <div class="flex gap-x-5 justify-self-end">
        <Cart @change="console.log($event)" class="self-center" />
        <Button class="hidden md:inline-grid">Contact Us</Button>
      </div>
    </div>
  </header>
</template>
