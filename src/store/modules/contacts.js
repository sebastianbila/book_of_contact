export default {
  state: {
    contacts: [
      {
        id: 1,
        lastName: 'Bila',
        firstName: 'Sebastian',
        phone: '+380960304019'
      },
      {
        id: 2,
        lastName: 'Rash',
        firstName: 'Forazov',
        phone: '+380673391374'
      }
    ]
  },
  actions: {},
  mutations: {
    createContact (state, contact) {
      state.contacts.unshift(contact)
    }
  },
  getters: {
    getContacts (state) {
      return state.contacts
    }
  }
}
