export default {
  state: {
    isOpen: false
  },
  actions: {},
  mutations: {
    toggleOverlay (state) {
      state.isOpen = !state.isOpen
    }
  },
  getters: {
    isOverlay (state) {
      return state.isOpen
    }
  }
}
