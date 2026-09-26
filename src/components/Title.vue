<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  { as: 'h2' },
)
</script>

<template>
  <component :is="props.as" class="font-main uppercase">
    <slot />
  </component>
</template>
