<template>
  <n-dropdown :options="options" @select="handleSelect">
    <div class="flex items-center cursor-pointer">
      <img :src="userStore.avatar" class="mr10 w-35 h-35 rounded-full" />
      <span>{{ userStore.name }}</span>
    </div>
  </n-dropdown>
</template>

<script setup>
  import { useUserStore } from '@/store'
  import { renderIcon } from '@/hooks'

  const userStore = useUserStore()

  const options = [
    {
      label: '退出登录',
      key: 'logout',
      icon: renderIcon('mdi:exit-to-app', { size: '14px' })
    }
  ]

  function handleSelect(key) {
    if (key === 'logout') {
      window.$dialog.confirm({
        title: '提示',
        type: 'info',
        content: '确认退出？',
        confirm() {
          userStore.logout()
          window.$message.success('已退出登录')
        }
      })
    }
  }
</script>
