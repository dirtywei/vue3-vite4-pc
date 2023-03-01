const Layout = () => import('@/layout/index.vue')
const Blank = () => import('@/components/common/AppBlank.vue')

export default {
  name: 'MultipleMenu',
  path: '/multi-menu',
  component: Layout,

  meta: {
    title: '多级菜单',
    icon: 'ic:baseline-menu',
    role: ['admin'],
    requireAuth: true,
    order: 4
  },
  children: [
    {
      name: 'a-1',
      path: 'multiple-menu',
      component: Blank,
      meta: {
        title: 'a-1',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true
      },
      children: [
        {
          name: 'a-1-1',
          path: 'a-1-1',
          component: () => import('@/views/multi-menu/a-1/a-1-1/index.vue'),
          meta: {
            title: 'a-1-1',
            icon: 'ic:baseline-menu',
            role: ['admin'],
            requireAuth: true
          }
        },
        {
          name: 'a-1-2',
          path: 'a-1-2',
          component: () => import('@/views/multi-menu/a-1/a-1-2/index.vue'),
          meta: {
            title: 'a-1-2',
            icon: 'ic:baseline-menu',
            role: ['admin'],
            requireAuth: true,
            keepAlive: true
          }
        }
      ]
    },
    {
      name: 'a-2',
      path: 'a-2',
      component: Blank,
      meta: {
        title: 'a-2',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true
      },
      children: [
        {
          name: 'a-2-1',
          path: 'a-2-1',
          component: () => import('@/views/multi-menu/a-2/a-2-1/index.vue'),
          meta: {
            title: 'keepAlive',
            icon: 'ic:baseline-menu',
            role: ['admin'],
            requireAuth: true,
            keepAlive: true
          }
        }
      ]
    }
  ]
}
