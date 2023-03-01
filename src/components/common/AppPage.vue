<template>
  <transition name="fade-slide" mode="out-in" appear>
    <div class="custom-scroll-y h-full p-16 flex-col bg-[#f6f9f8] dark:bg-hex-121212">
      <slot />
      <AppFooter v-if="showFooter" class="mt-15" />
      <n-back-top :bottom="20" />
    </div>
  </transition>
</template>

<script setup>
  defineProps({
    showFooter: {
      type: Boolean,
      default: true
    }
  })
</script>
