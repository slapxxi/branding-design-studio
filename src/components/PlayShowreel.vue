<template>
  <svg viewBox="0 0 500 500">
    <defs>
      <path id="a" fill="none" d="M80 260a90 90 0 1 1 330 0" />
      <path id="b" fill="none" d="M410 250a90 90 0 1 1-330 0" />
    </defs>

    <circle cx="250" cy="250" r="240" class="fill-xred-700" />
    <path d="M233 222v56l48-28z" class="fill-black" />

    <g class="origin-center animate-spin [animation-duration:8s]">
      <text class="wheel-text">
        <textPath href="#a" startOffset="50%" text-anchor="middle">PLAY SHOWREEL</textPath>
      </text>
      <text class="wheel-text">
        <textPath href="#b" startOffset="50%" text-anchor="middle">PLAY SHOWREEL</textPath>
      </text>
    </g>
  </svg>
</template>

<style scoped>
.wheel-text {
  font-family: 'Roboto', sans-serif;
  font-size: 56px;
  font-weight: 900;
  fill: #ffffff;
  letter-spacing: 2px;
}
</style>
