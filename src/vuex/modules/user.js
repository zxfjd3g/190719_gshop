/* 
用户模块相关数据管理
*/
import {
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_USER,
  RESET_TOKEN,
} from '../mutation-types'

import {
  reqAutoLogin,
} from '@/api'

export default  {
  state: { 
    user: {}, // 用户信息对象
    token: localStorage.getItem('token_key') || '', // 当前用户登陆的标记
  },
  mutations: { 
    [RECEIVE_TOKEN] (state, {token}) {
      state.token = token
    },
    [RECEIVE_USER] (state, {user}) {
      state.user = user
    },
    [RESET_TOKEN] (state) {
      state.token = ''
    },
    [RESET_USER] (state) {
      state.user = {}
    },
  },
  actions: {
    /* 
    保存用户
    */
    saveUser ({commit}, user) {
      const token = user.token
      // 将token保存local
      localStorage.setItem('token_key', token)

      delete user.token  // 删除user内部的token

      // 将token保存到state
      commit(RECEIVE_USER, {user})
      // 将user保存到state
      commit(RECEIVE_TOKEN, {token})
    },

    /* 
    自动登陆的异步action
    */
    async autoLogin ({commit, state}) {

      if (state.token && !state.user._id) { // 必须要有token且没有user信息
        // 发送自动登陆的请求
        const result = await reqAutoLogin()
        if (result.code===0) {
          const user = result.data  // 没有token
          commit(RECEIVE_USER, {user})
        }
      }
    },

    logout ({commit}) {
      localStorage.removeItem('token_key')
      commit(RESET_USER)
      commit(RESET_TOKEN)
    },
  },
  getters: { 
    
  }
}