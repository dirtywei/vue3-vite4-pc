<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
  defineOptions({ name: 'Blank' })
</script>
