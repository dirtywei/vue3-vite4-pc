import { resolveToken } from '../utils'

const users = {
  admin: {
    id: 1,
    name: 'DirtyWei(admin)',
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/d68ecc68248372e4ffbc823037a2f7b5~100x100.awebp',
    email: 'Ronnie@123.com',
    role: ['admin']
  },
  editor: {
    id: 2,
    name: 'DirtyWei(editor)',
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/d68ecc68248372e4ffbc823037a2f7b5~100x100.awebp',
    email: 'Ronnie@123.com',
    role: ['editor']
  },
  guest: {
    id: 3,
    name: '访客(guest)',
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/d68ecc68248372e4ffbc823037a2f7b5~100x100.awebp',
    role: []
  }
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
          ...(users[token] || users.guest)
        }
      }
    }
  }
]
