import { request } from '@/utils'

/**
 *获取文章
 */
export function fetchGetPost(params = {}) {
  return request.get('/posts', { params })
}
/**
 *获取文章by ID
 */
export function fetchGetPostById(id) {
  return request.get(`/post/${id}`)
}

/**
 *增加文章
 */
export function fetchAddPost(data) {
  return request.post('/post', data)
}
/**
 *更新文章
 */
export function fetchUpdatePost(data) {
  return request.put(`/post/${data.id}`, data)
}
/**
 *删除文章
 */
export function fetchDeletePost(id) {
  return request.delete(`/post/${id}`)
}
