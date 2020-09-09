import axios from '@/axios/axios-config'
import showAlert from '../../utils/showAlert'

export default {
  state: {
    contacts: []
  },
  actions: {
    /* Get all contacts from firebase */
    async retrieveContacts ({ commit }) {
      const response = await axios.get('/contacts.json')
      const contacts = await response.data

      const data = []

      if (contacts !== null) {
        Object.keys(contacts).forEach(key => {
          contacts[key].uid = key
          data.push(contacts[key])
        })
      }

      commit('updateContacts', data)
    },

    /* Delete contact by uid(key) */
    async deleteContact ({ commit }, uid) {
      const response = await axios.delete(`/contacts/${uid}.json`)
      if (response.status === 200) {
        commit('updateDeletedContact', uid)
        showAlert(commit, 'Contact was deleted')
      } else {
        showAlert(commit, 'Cannot delete contact. Try again later ...', 'warning')
      }
    },

    /* Create new contacts and save into firebase */
    async createContact ({ commit }, contact) {
      const response = await axios.post('/contacts.json', contact)
      if (response.status === 200) {
        commit('saveCreatedContact', contact)
        showAlert(commit, 'Contact was created')
      } else {
        showAlert(commit, 'Cannot create contact. Try again later ...', 'warning')
      }
    },

    /* Create new contacts and save into firebase */
    async updateContact ({ commit, dispatch }, { contact, uid }) {
      const response = await axios.put(`/contacts/${uid}.json`, contact)
      if (response.status === 200) {
        dispatch('retrieveContacts')
        commit('saveCreatedContact', contact)
        showAlert(commit, 'Contact was save successfully.')
      } else {
        showAlert(commit, 'Cannot save contact. Try again later ...', 'warning')
      }
    }
  },
  mutations: {
    updateContacts (state, data) {
      state.contacts = data
    },
    updateDeletedContact (state, uid) {
      state.contacts = state.contacts.filter(o => o.uid !== uid)
    },
    saveCreatedContact (state, contact) {
      state.contacts.push(contact)
    }
  },
  getters: {
    getContacts (state) {
      return state.contacts
    }
  }
}
