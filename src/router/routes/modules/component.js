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
    },
    {
      name: 'Crud',
      path: 'crud',
      component: () => import('@/views/component/table/index.vue'),
      meta: {
        title: 'CRUD表格',
        icon: 'ic:baseline-table-view',
        role: ['admin'],
        requireAuth: true,
        keepAlive: true
      }
    },
    {
      name: 'Editor',
      path: 'editor',
      component: () => import('@/views/component/editor/index.vue'),
      meta: {
        title: '富文本',
        icon: 'mdi:receipt-text-check',
        role: ['admin'],
        requireAuth: true,
        keepAlive: false
      }
    }
  ]
}
