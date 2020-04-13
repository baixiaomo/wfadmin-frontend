export default {
  state: {
    userInfo: {
      userId: '',
      userName: '',
      userRoles: []
    }
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  }
}
