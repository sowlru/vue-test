export const module1 = {
  // state - ф-ция, меняющая объект. Все остальное - объекты
  state: () => ({ ms1: 10 }),
  getters: {},
  mutations: {
    mm1(state, p1) {
      state.ms1 += p1
    }
  },
  actions: {
    // ma1({ state, commit, dispatch }) {}
  },
  namespaced: true
}
