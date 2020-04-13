/**
 * 接口模拟模块
 * 使用mockJS组件 http://mockjs.com/
 * 开发环境默认启用mock模式
 */
import Config from '../http/config'
import Mock from 'mockjs'
import * as app from './module/app'

const modules = [app]

Mock.setup({
  timeout: '200-600' // 设置mock请求的超时时间
})

/**
 * 仅在开发环境下启用mock模式
 */
const openMock = true

if (openMock && process.env.NODE_ENV === 'development') {
  for (const module of modules) {
    for (const key in module) {
      const url = Config.BASE_API_URL + module[key].url
      Mock.mock(new RegExp(url), module[key].method, (opt) => {
        opt['data'] = opt.body ? JSON.parse(opt.body) : null
        console.log('\n')
        console.log('%cmock拦截, 请求: ', 'color:blue', opt)
        const cb = module[key].cb
        if (typeof cb === 'function') {
          return cb(opt)
        } else {
          return cb
        }
      })
    }
  }
}
