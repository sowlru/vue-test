export default {
  state: {
    items: stub()
  },
  getters: {
    all: (state) => state.items,
    one: (state) => (id) => state.items.find((item) => item.id == id)
  },
  mutations: {},
  actions: {},
  namespaced: true
}

function stub() {
  return [
    { id: 100, title: 'Iphone 200', price: 12000, rest: 10 },
    { id: 101, title: 'Samsung AAZ8', price: 22000, rest: 5 },
    { id: 103, title: 'Nokia 3310', price: 5000, rest: 2 },
    { id: 105, title: 'Huawei ZZ', price: 15000, rest: 8 }
  ]
}
