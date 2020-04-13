/**
 * 系统接口模块
 */

/**
 * 登陆
 * @param params
 * @returns {*}
 */
export const login = {
  method: 'get',
  url: '/login',
  cb: opt => {
    return {
      code: 200,
      msg: 'success',
      token: '12312435r345345sadf#@#va'
    }
  }
}

/**
 * 退出
 * @returns {{code: number, msg: string}}
 */
export const logout = {
  method: 'get',
  url: '/logout',
  cb: opt => {
    return {
      code: 200,
      msg: 'success'
    }
  }
}
/**
 * 根据用户返回用户信息
 * @returns {*}
 */
export const info = {
  method: 'get',
  url: '/info',
  cb: opt => {
    return {
      code: 200,
      msg: 'success',
      data: {
        userId: '001',
        userName: 'WF',
        role: 'admin,test'
      }
    }
  }
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
