import axios from '@/axios/axios-config'
import showAlert from '../../utils/showAlert'

export default {
  state: {
    fields: []
  },
  actions: {
    async addField ({ commit }, { contactId, field }) {
      const response = await axios.post(`/contacts/${contactId}/fields.json`, field)
      if (response.status === 200) {
        commit('saveField', field)
        showAlert(commit, 'Field was created')
      } else {
        showAlert(commit, 'Cannot save field. Try again later ...', 'warning')
      }
    },
    async deleteField ({ commit }, { contactId, fieldId }) {
      const response = await axios.delete(`/contacts/${contactId}/fields/${fieldId}.json`)
      if (response.status === 200) {
        commit('updateDeletedField', fieldId)
        showAlert(commit, 'Field was deleted')
      } else {
        showAlert(commit, 'Cannot delete field. Try again later ...', 'warning')
      }
    }
  },
  mutations: {
    updateFields (state, fields) {
      state.fields = fields
    },
    updateDeletedField (state, id) {
      state.fields = state.fields.filter(o => o.id !== id)
    },
    saveField (state, field) {
      Array.from(state.fields)
      state.fields.push(field)
    }
  },
  getters: {
    getFields (state) {
      return state.fields
    }
  }
}
