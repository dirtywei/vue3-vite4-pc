<template>
  <template v-if="renderCustomIcon">
    <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </template>
  <template v-else>
    <Icon v-if="icon" :icon="icon" v-bind="bindAttrs" />
  </template>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  /**
   * 图标组件
   * - 动态渲染: 根据图标名称渲染对应图标
   * - 支持iconify和本地svg图标
   * - 同时传递了icon和customIcon，customIcon会优先渲染
   * - <svg-icon :customIcon="iconName"  />
   * - <svg-icon :icon="iconName"  />
   */

  const props = defineProps({
    icon: {
      type: String
    },
    customIcon: {
      type: String
    }
  })

  const attrs = useAttrs()

  const bindAttrs = computed(() => ({
    class: attrs.class || '',
    style: attrs.style || ''
  }))

  const symbolId = computed(() => {
    const defaultCustomIcon = 'no-icon'
    const icon = props.customIcon || defaultCustomIcon
    return `#icon-custom-${icon}`
  })

  /** 渲染本地icon */
  const renderCustomIcon = computed(() => props.customIcon || !props.icon)
</script>

<style scoped></style>
