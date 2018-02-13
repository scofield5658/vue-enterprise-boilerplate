/* eslint no-shadow: off */
/* eslint no-unused-vars: off */
import * as types from '../mutation-types'

const state = {
  userId: ''
}

const actions = {
  setUserInfo ({ commit, state }, payload) {
    commit(types.SET_USERINFO, payload)
  }
}

const mutations = {
  [types.SET_USERINFO] (state, userInfo) {
    state.userId = userInfo.userId
  }
}

export default {
  state,
  actions,
  mutations
}
