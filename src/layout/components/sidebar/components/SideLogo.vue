<template>
  <router-link class="h-60 f-c-c" to="/">
    <icon-custom-logo class="text-36 color-primary"></icon-custom-logo>
    <h2 v-show="!appStore.collapsed" class="ml-10 color-primary text-16 font-bold max-w-140 flex-shrink-0">
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
  import { useAppStore } from '@/store'
  const title = import.meta.env.VITE_TITLE

  const appStore = useAppStore()
</script>
