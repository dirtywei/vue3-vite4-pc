<template>
  <transition name="fade-slide" mode="out-in" appear>
    <div class="custom-scroll-y h-full p-16 flex-col bg-[#fcfcfc] dark:bg-hex-121212">
      <slot />
      <n-back-top :bottom="20" />
    </div>
  </transition>
</template>

<script setup></script>
