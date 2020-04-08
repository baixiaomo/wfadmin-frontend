/**
 * 权限管理相关通用方法
 */
import Cookies from 'js-cookie'

const tokenKey = 'Authorization'

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
