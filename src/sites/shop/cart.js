const BASE_URL = 'http://faceprog.ru/reactcourseapi/cart/'

export default {
  state: {
    items: [],
    token: null
  },
  getters: {
    // inCart(state) {
    //   return function (id) {
    //     return state.items.some((item) => item.id == id)
    //   }
    // }
    inCart: (state) => (id) => state.items.some((item) => item.id == id),
    length(state) {
      return state.items.length
    },
    itemsDetailed: (state, getters, rootState, rootGetters) => {
      return state.items.map((item) => {
        let product = rootGetters['product/one'](item.id)
        return { ...product, cnt: item.cnt }
      })
    },
    total: (state, getters) => {
      return getters.itemsDetailed.reduce((ac, el) => ac + el.price * el.cnt, 0)
    }
  },
  mutations: {
    load(state, { cart, token }) {
      state.items = cart
      state.token = token
    },
    add(state, id) {
      state.items.push({ id, cnt: 1 })
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id != id)
    },
    setCnt(state, { id, cnt }) {
      let item = state.items.find((item) => item.id == id)
      item.cnt = cnt
    }
  },
  actions: {
    async load({ commit }) {
      let oldToken = localStorage.getItem('CART_TOKEN')
      let res = await fetch(`${BASE_URL}load.php?token=${oldToken}`)
      let { cart, token, needUpdate } = await res.json()
      if (needUpdate) {
        localStorage.setItem('CART_TOKEN', token)
      }
      commit('load', { cart, token })
    },
    async add({ commit, getters, state }, id) {
      if (!getters.inCart(id)) {
        let res = await fetch(
          `${BASE_URL}add.php?token=${state.token}&id=${id}`
        )
        let r = await res.json()
        if (r) {
          commit('add', id)
        }
      }
    },
    async remove({ commit, getters, state }, id) {
      if (getters.inCart(id)) {
        let res = await fetch(
          `${BASE_URL}remove.php?token=${state.token}&id=${id}`
        )
        let r = await res.json()
        if (r) {
          commit('add', id)
        }
      }
    },
    setCnt({ commit, getters }, { id, cnt }) {
      if (getters.inCart(id)) {
        let item = getters.itemsDetailed.find((item) => item.id == id)
        let validCnt = Math.min(Math.max(cnt, 1), item.rest)
        commit('setCnt', { id, cnt: validCnt })
      }
    }
  },
  namespaced: true
}

function stub() {
  return [
    { id: 100, сnt: 1 },
    { id: 103, сnt: 2 }
  ]
}
