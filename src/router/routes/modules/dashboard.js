const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Dashboard',
  path: '/',
  component: Layout,
  redirect: '/workbench',
  meta: {
    title: '仪表盘',
    icon: 'mdi:monitor-dashboard',
    order: 1
  },
  children: [
    {
      name: 'Workbench',
      path: 'workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        icon: 'icon-park-outline:workbench',
        order: 0
      }
    },
    {
      name: 'Analysis',
      path: 'analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析页',
        icon: 'icon-park-outline:analysis',
        order: 0
      }
    }
  ]
}
