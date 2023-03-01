const Layout = () => import('@/layout/index.vue')

export default {
  name: 'management',
  path: '/management',
  component: Layout,
  redirect: '/management/auth',
  meta: {
    title: '系统管理',
    icon: 'carbon:cloud-service-management',
    order: 5
  },
  children: [
    {
      name: 'management_auth',
      path: 'auth',
      component: () => import('@/views/management/auth/index.vue'),
      meta: {
        title: '权限管理',
        icon: 'ic:baseline-security',
        order: 1
      }
    },
    {
      name: 'component_user',
      path: 'user',
      component: () => import('@/views/management/user/index.vue'),
      meta: {
        title: '用户管理',
        requiresAuth: true,
        icon: 'ic:round-manage-accounts',
        order: 2
      }
    }
  ]
}
