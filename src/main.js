import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importing the global scss file
import '@/assets/global.scss'

// Importing the dialog scss file
import '@/assets/dialog.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
