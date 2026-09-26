<script setup lang="ts"></script>

<template>
  <button
    class="rounded bg-xred-700 p-2.5 text-fluid-sm text-white uppercase hover:bg-xred-700/80
      active:bg-xred-700"
    :class="$style.btn"
  >
    <span class="col-2">
      <slot />
    </span>
  </button>
</template>

<style module>
@layer components {
  .btn {
    display: inline-grid;
    grid-template-columns: minmax(0, 20px) 1fr minmax(0, 20px);
  }
}
</style>
