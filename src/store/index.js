import Vue from 'vue'
import Vuex from 'vuex'
import addContact from './modules/overlay'
import contacts from './modules/contacts'
import alert from './modules/alert'
import fields from './modules/fields'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    addContact,
    contacts,
    alert,
    fields
  }
})
