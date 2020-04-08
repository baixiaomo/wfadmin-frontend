/**
 * 登陆模块接口
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
