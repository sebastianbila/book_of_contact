import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactInfo from '../views/ContactInfo'
import Contacts from '../views/Contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Contacts
  },
  {
    path: '/contact-info/:uid',
    name: 'info',
    component: ContactInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
