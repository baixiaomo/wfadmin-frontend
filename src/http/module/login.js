/**
 * 登陆模块接口
 */
import axios from '../axios'

export const login = params => {
  return axios({
    method: 'get',
    url: '/login',
    params
  })
}
