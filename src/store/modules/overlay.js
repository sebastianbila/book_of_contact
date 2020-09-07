export default {
  state: {
    isOpen: false
  },
  actions: {
    toggleOverlay (ctx) {
      ctx.commit('updateOverlay')
    }
  },
  mutations: {
    updateOverlay (state) {
      state.isOpen = !state.isOpen
    }
  },
  getters: {
    isOverlay (state) {
      return state.isOpen
    }
  }
}
