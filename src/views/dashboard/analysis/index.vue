<template>
  <AppPage>
    <n-space :vertical="true" :size="16">
      <top-chart />
      <data-card />
      <bottom-part />
    </n-space>
  </AppPage>
</template>

<script setup>
  import { BottomPart, DataCard, TopChart } from './components'
</script>

<style scoped></style>
