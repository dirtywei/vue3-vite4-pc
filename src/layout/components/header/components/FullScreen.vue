<template>
  <n-icon class="mr20" size="18" style="cursor: pointer" @click="toggle">
    <icon-gridicons:fullscreen-exit v-if="isFullscreen" />
    <icon-gridicons:fullscreen v-else />
  </n-icon>
</template>

<script setup>
  import { useFullscreen } from '@vueuse/core'

  const { isFullscreen, toggle } = useFullscreen()
</script>
