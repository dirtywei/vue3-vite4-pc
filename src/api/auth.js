import { request } from '@/utils'

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName, password) {
  return request.post('/m2/557839-0-default/65312047', { userName, password }, { noNeedToken: true })
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get('/m2/557839-0-default/65373117')
}

/**
 * 刷新token
 * @param token
 */
export function fetchUpdateToken(token) {
  return request.post('/getSmsCode', { token })
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId) {
  return request.post('/getUserRoutes', { userId })
}
