<template>
  <AppPage>
    <n-card title="按钮" class="shadow-sm rounded-16px">
      <n-grid cols="s:1 m:2" responsive="screen" :x-gap="16" :y-gap="16">
        <n-grid-item v-for="item in buttonExample" :key="item.id">
          <n-card :title="item.label" class="min-h-180px">
            <p v-if="item.desc" class="pb-16px">{{ item.desc }}</p>
            <n-space>
              <n-button
                v-for="button in item.buttons"
                :key="button.id"
                v-bind="button.props"
                :style="`--icon-margin: ${button.props.circle ? 0 : 6}px`"
              >
                <template v-if="button.icon" #icon>
                  <svg-icon :icon="button.icon" />
                </template>
                {{ button.label }}
              </n-button>
            </n-space>
          </n-card>
        </n-grid-item>
        <n-grid-item class="h-180px">
          <n-card title="加载中" class="h-full">
            <p class="pb-16px">按钮有加载状态。</p>
            <n-space>
              <n-button :loading="loading" type="primary" @click="startLoading">开始加载</n-button>
              <n-button @click="endLoading">取消加载</n-button>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-card>
  </AppPage>
</template>

<script setup>
  import { buttonExample } from '@/config'

  const loading = ref(false)
  const startLoading = () => {
    loading.value = true
  }
  const endLoading = () => {
    loading.value = false
  }
</script>

<style scoped></style>
