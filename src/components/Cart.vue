<script setup lang="ts">
import CartIcon from '@/assets/cart-icon.svg'
import { ref } from 'vue'

const count = ref(0)

const emit = defineEmits<{ change: [number] }>()

const handleClick = () => {
  count.value += 12
  emit('change', count.value)
}
</script>

<template>
  <div class="grid grid-cols-[24px_minmax(24px,auto)] gap-x-1">
    <CartIcon class="w-full self-center" />

    <button
      @click="handleClick"
      class="flex items-center justify-center bg-xred-700 px-1 text-sm text-white"
    >
      {{ count }}
    </button>
  </div>
</template>
