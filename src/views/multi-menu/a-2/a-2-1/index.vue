<template>
  <AppPage>
    <div w-350 color-gray>
      <n-input v-model:value="inputVal" />
      <n-input-number v-model:value="number" mt-30 />
    </div>
  </AppPage>
</template>

<script setup>
  defineOptions({ name: 'a-2-1' })

  const inputVal = ref('')
  const number = ref(0)

  onMounted(() => {
    window.$message.success('onMounted')
  })

  onUnmounted(() => {
    window.$message.error('onUnmounted')
  })

  onActivated(() => {
    window.$message.info('onActivated')
  })
  onDeactivated(() => {
    window.$message.warning('onDeactivated')
  })
</script>
