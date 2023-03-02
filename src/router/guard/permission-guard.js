import { getToken, refreshAccessToken, isNullOrWhitespace } from '@/utils'
import { handleMatched } from '@/hooks'

const WHITE_LIST = ['/login', '/404']
export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    const token = getToken()

    /** 没有token的情况 */
    if (isNullOrWhitespace(token)) {
      if (WHITE_LIST.includes(to.path)) return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }
    /** 有token的情况 */
    if (to.path === '/login') return { path: '/' }

    refreshAccessToken()
    handleMatched(to) //解决三级路由缓存问题
    return true
  })
}
