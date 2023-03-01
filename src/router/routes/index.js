export * from './modules'

export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页'
    }
  }
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true
}

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null
}
