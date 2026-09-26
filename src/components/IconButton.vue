<template>
  <button
    class="inline-grid aspect-square cursor-pointer grid-cols-[minmax(auto,22px)] place-items-center
      place-self-start rounded bg-black/8 p-2 hover:opacity-50 disabled:opacity-0
      dark:bg-neutral-800"
  >
    <slot />
  </button>
</template>
