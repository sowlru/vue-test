// main.js : import store from '@/store'
// main.js : app.use(store)

import { createStore } from 'vuex'
import { module1 } from '@/store/module1'

export default createStore({
  // в state хранятся данные приложения
  state: {
    s1: 1,
    // shop
    price: 10,
    cnt: 7
  },
  // getters - аналог computed - свойства
  getters: {
    g1(state) {
      return state.s1 * 2
    }
  },
  // напрямую state изменять нельзя, только через мутации
  // state В параметрах - это ссылка на state
  mutations: {
    m1(state) {
      state.s1 += 1
    },
    m2(state) {
      state.s1 -= 1
    },
    // shop
    decrease(state) {
      if (state.cnt > 0) {
        state.cnt--
      }
    },
    increase(state) {
      state.cnt++
    }
  },
  // actions - ф-ции, внутри себя используют мутации
  // напрямую изменять state из actions не рекомендуется
  // получаем данные из сервера -> вызываем мутацию -> сохраняем данные в state
  // принимает объект context с полями: state, rootState, ...
  //   commit(вызов мутаций), dispatch(вызов других actions), getters, rootGetters
  actions: {},
  // module - изолированный кусочек state
  modules: {
    md1: module1
  },
  // strict: true
  strict: process.env.NODE_ENV !== 'production'

  // class Vuex {
  //   state = {}
  //   mutations = {}
  //   commit(name){
  //     let fn = this.mutations[name]
  //     fn(this.state)
  //   }
  // }
})
