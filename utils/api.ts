import Http from '@/utils/request'

// 验证码
export const captcha = (params: any) => Http.get('/captcha', params)

// 登录
export const login = (params: any) => Http.post('/qiegang-auth/oauth/tokenAdmin', params)