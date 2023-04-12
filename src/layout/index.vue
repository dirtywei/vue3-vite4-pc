<template>
  <n-layout has-sider class="wh-full">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
      :collapsed="appStore.collapsed"
    >
      <SideBar />
    </n-layout-sider>

    <article class="flex-1 flex-col overflow-hidden">
      <header
        class="bg-white px-15 border-b b-b-solid bc-eee flex items-center dark:border-0 dark:bg-dark"
        :style="`height: ${header.height}px`"
      >
        <AppHeader />
      </header>
      <div v-if="tags.visible" class="border-b b-b-solid bc-eee hidden sm:block dark:border-0">
        <AppTags class="global-tag-shadow" :style="{ height: `${tags.height}px` }" />
      </div>
      <main class="flex-1 overflow-hidden bg-hex-f6f9f8 dark:bg-hex-101014">
        <AppMain />
      </main>
      <AppFooter class="mt-15 bc-eee bg-white dark:border-0 dark:bg-dark border-t p-8 b-t-solid" />
    </article>
  </n-layout>
</template>

<script setup>
  import AppHeader from './components/header/index.vue'
  import AppTags from './components/tags/index.vue'
  import SideBar from './components/sidebar/index.vue'
  import AppMain from './components/AppMain.vue'
  import { useAppStore } from '@/store'
  import { header, tags } from '~/settings'

  const appStore = useAppStore()
</script>
