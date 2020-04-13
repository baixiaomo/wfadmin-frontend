/**
 * 系统接口模块
 */
import axios from '../axios'

/**
 * 登陆接口
 * @param params
 * @returns {*}
 */
export const login = params => {
  return axios({
    method: 'get',
    url: '/login',
    params
  })
}
/**
 * 退出接口
 */
export const logout = () => {}

/**
 * 根据用户返回用户信息
 * @returns {*}
 */
export const info = () => {
  return axios({
    method: 'get',
    url: '/info'
  })
}

/**
 * 根据用户返回路由
 * @returns {*}
 */
export const router = () => {
  return axios({
    method: 'get',
    url: '/router'
  })
}
/**
 * 根据用户返回菜单
 * @returns {*}
 */
export const menus = () => {
  return axios({
    method: 'get',
    url: '/menus'
  })
}
