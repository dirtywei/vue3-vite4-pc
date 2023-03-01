<template>
  <div class="flex items-center">
    <MenuCollapse />
    <BreadCrumb class="ml-15 hidden sm:block" />
  </div>
  <div class="ml-auto flex items-center">
    <ThemeMode />
    <FullScreen />
    <UserAvatar />
  </div>
</template>

<script setup>
  import BreadCrumb from './components/BreadCrumb.vue'
  import MenuCollapse from './components/MenuCollapse.vue'
  import FullScreen from './components/FullScreen.vue'
  import UserAvatar from './components/UserAvatar.vue'
  import ThemeMode from './components/ThemeMode.vue'
</script>
