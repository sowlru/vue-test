// main.js : import store from '@/store'
// main.js : app.use(store)

import { createStore } from 'vuex'
import { module1 } from '@/store/module1'
import product from '@/sites/shop/product'
import cart from '@/sites/shop/cart'

export default createStore({
  // в state хранятся данные приложения
  // приватный объект
  state: {
    s1: 1,
    // shop
    price: 15,
    cnt: 7,
    orderStatus: 0
  },
  // getters - аналог computed - свойства
  // имеет доступ только к state или другим getters
  getters: {
    g1(state) {
      return state.s1 * 2
    },
    // shop
    price: (state) => state.price,
    cnt: (state) => state.cnt,
    total: (state) => state.price * state.cnt,
    orderIsNothing: (state) => state.orderStatus == 0,
    orderIsPending: (state) => state.orderStatus == 1,
    orderIsDone: (state) => state.orderStatus == 2
  },
  // напрямую state изменять нельзя, только через мутации
  // state в параметрах - это ссылка на state
  // имеет доступ только к state
  // не имеет доступ к геттерам и другим мутациям
  // ставит перед своим запуском флажок - блокировка ререндеринга
  // после всех присваиваний происходит разблокировка флажка
  // это ставит ограничение чтобы мутация была синхронной маленькой ф-цией
  mutations: {
    m1(state) {
      state.s1 += 1
    },
    m2(state) {
      state.s1 -= 1
    },
    // shop
    setCnt(state, val) {
      state.cnt = Math.max(1, val)
    },
    setOrderStatus(state, status) {
      state.orderStatus = status
    }
  },
  // actions - ф-ции, внутри себя используют мутации
  // напрямую изменять state из actions не рекомендуется
  // получаем данные из сервера -> вызываем мутацию -> сохраняем данные в state
  // принимает объект context с полями: state, rootState, ...
  //   commit(вызов мутаций), dispatch(вызов других actions), getters, rootGetters
  actions: {
    decrease({ state, commit }) {
      commit('setCnt', state.cnt - 1)
    },
    increase({ state, commit }) {
      commit('setCnt', state.cnt + 1)
    },
    setCnt({ commit }, val) {
      let cnt = parseInt(val)
      commit('setCnt', isNaN(cnt) ? 1 : cnt)
    },
    send(store) {
      store.commit('setOrderStatus', 1)
      // request to server
      setTimeout(() => {
        store.commit('setOrderStatus', 2)
      }, 1000)
    }
  },
  // module - изолированный кусочек state
  modules: {
    md1: module1,
    product,
    cart
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
