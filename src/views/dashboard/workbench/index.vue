<template>
  <AppPage>
    <n-space :vertical="true" :size="16">
      <workbench-header />
      <workbench-main />
    </n-space>
  </AppPage>
</template>

<script setup>
  import { WorkbenchHeader, WorkbenchMain } from './components'
</script>

<style lang="scss" scoped></style>
