const Layout = () => import('@/layout/index.vue')

export default {
  name: 'document',
  path: '/document',
  component: Layout,
  redirect: '/document/vite',
  meta: {
    title: '文档',
    icon: 'mdi:file-document-multiple-outline',
    order: 2
  },
  children: [
    {
      name: 'document_vite',
      path: 'vite',
      component: () => import('@/views/document/vite/index.vue'),
      meta: {
        title: 'vite文档',
        requiresAuth: true,
        icon: 'logos:vitejs'
      }
    },
    {
      name: 'document_naive',
      path: 'naive',
      component: () => import('@/views/document/naive/index.vue'),
      meta: {
        title: 'naive文档',
        requiresAuth: false,
        icon: 'logos:naiveui'
      }
    },
    {
      name: 'LinkDocs',
      path: 'https://zclzone.github.io/vue-naive-admin-docs',
      meta: {
        title: '文档 - vuepress',
        icon: 'mdi:vuejs'
      }
    }
  ]
}
