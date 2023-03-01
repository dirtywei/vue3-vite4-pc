const Layout = () => import('@/layout/index.vue')

export default {
  name: 'component',
  path: '/component',
  component: Layout,
  redirect: '/component/button',
  meta: {
    title: '组件示例',
    icon: 'cib:app-store',
    order: 3
  },
  children: [
    {
      name: 'component_button',
      path: 'button',
      component: () => import('@/views/component/button/index.vue'),
      meta: {
        title: '按钮',
        requiresAuth: false,
        icon: 'mdi:button-cursor'
      }
    },
    {
      name: 'component_card',
      path: 'card',
      component: () => import('@/views/component/card/index.vue'),
      meta: {
        title: '卡片',
        requiresAuth: false,
        icon: 'mdi:card-outline'
      }
    }
  ]
}
