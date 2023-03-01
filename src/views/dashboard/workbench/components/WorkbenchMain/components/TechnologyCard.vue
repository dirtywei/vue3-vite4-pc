<template>
  <div
    class="p-4px border-1px border-[#efeff5] dark:border-[#ffffff17] rounded-4px hover:shadow-sm cursor-pointer"
    @click="handleOpenSite"
  >
    <header class="flex-y-center">
      <svg-icon :icon="icon" :style="{ color: iconColor }" class="text-30px" />
      <h3 class="pl-12px text-18px font-semibold">{{ name }}</h3>
    </header>
    <p class="py-8px h-56px text-[#999]">{{ description }}</p>
    <div class="flex justify-end">
      <span>{{ author }}</span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    /** 技术名称 */
    name: String,
    /** 技术描述 */
    description: String,
    /** 技术作者 */
    author: String,
    /** 技术官网 */
    site: String,
    /** 技术图标 */
    icon: String,
    /** 图标颜色 */
    iconColor: String
  })

  function handleOpenSite() {
    window.open(props.site, '_blank')
  }
</script>

<style scoped></style>
