<template>
  <div class="p-16px rounded-16px text-white" :style="{ backgroundImage: gradientStyle }">
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    startColor: {
      default: '#56cdf3'
    },
    endColor: {
      default: '#719de3'
    }
  })

  const gradientStyle = computed(() => `linear-gradient(to bottom right, ${props.startColor}, ${props.endColor})`)
</script>

<style scoped></style>
