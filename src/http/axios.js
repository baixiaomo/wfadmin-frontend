/**
 * 这里我们使用Promise对象对axios进行封装，以便可以使用promise的特性
 */

import axios from 'axios'
import config from './config'

export default options => {
  return new Promise((resolve, reject) => {
    // 创建 axios对象，并设置拦截器
    const $axios = axios.create({
      baseURL: config.BASE_API_URL,
      headers: config.HEADER,
      timeout: config.TIMEOUT,
      withCredentials: config.withCredentials
    })
    // 请求拦截器
    $axios.interceptors.request.use(
      config => {
        // if (getToken()) {
        //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        return config
      },
      request => {
        // 这里可以进行token等权限判断, 感觉放在后台更好
        return request
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截器
    $axios.interceptors.response.use(
      response => {
        // 处理状态码
        if (response.status === '200') {
          return response.data
        }
        return response.data
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 处理请求
    $axios(options).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
