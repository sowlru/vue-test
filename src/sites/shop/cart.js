export default {
  state: {
    items: []
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
    add({ commit, getters }, id) {
      if (!getters.inCart(id)) {
        commit('add', id)
      }
    },
    remove({ commit, getters }, id) {
      if (getters.inCart(id)) {
        commit('remove', id)
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
