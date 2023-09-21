export default {
  state: {
    items: stub()
  },
  getters: {
    // inCart(state) {
    //   return function (id) {
    //     return state.items.some((item) => item.id == id)
    //   }
    // }
    inCart: (state) => (id) => state.items.some((item) => item.id == id)
  },
  mutations: {},
  actions: {},
  namespaced: true
}

function stub() {
  return [
    { id: 100, сnt: 1 },
    { id: 103, сnt: 2 }
  ]
}
