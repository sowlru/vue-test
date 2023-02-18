import { createStore } from 'vuex'
import { module1 } from '@/store/module1'

export default createStore({
  state: {
    s1: 1
  },
  getters: {
    g1(state) {
      return state.s1 * 2
    }
  },
  mutations: {
    m1(state) {
      state.s1 += 1
    },
    m2(state) {
      state.s1 -= 1
    }
  },
  actions: {},
  modules: {
    md1: module1
  }
})
