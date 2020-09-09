export default {
  state: {
    text: '',
    type: '',
    status: false
  },
  mutations: {
    showAlert (state, { text, type = 'success' }) {
      state.status = true
      state.text = text
      state.type = type

      /* Auto hide alert after 2.5 sec */
      setTimeout(() => {
        state.status = false
      }, 2500)
    }
  },
  getters: {
    isAlert (state) {
      return state.status
    },
    text (state) {
      return state.text
    },
    type (state) {
      return state.type
    }
  }
}
