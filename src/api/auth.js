import { request } from '@/utils'

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(data) {
  return request.post('/auth/login', data, { noNeedToken: true })
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get('/user')
}

/**
 * 刷新token
 * @param token
 */
export function fetchUpdateToken() {
  return request.post('/auth/refreshToken', null, { noNeedTip: true })
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId) {
  return request.post('/getUserRoutes', { userId })
}
