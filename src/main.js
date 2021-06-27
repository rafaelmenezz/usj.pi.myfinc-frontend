import 'font-awesome/css/font-awesome.css';


import Vue from 'vue'
import App from './App.vue'
import Index from './Home.vue'



import './config/axios'
import './config/msgs'
import './config/uikit'

import store from './config/store'
import router from './config/router'



Vue.config.productionTip = false


const routes = {

  '/': App,
  '/myfinc': Index,
  '/sobre': App,
  '/login': App,
  '/myfinc/mural': Index,
  '/myfinc/perfil': Index,
  '/myfinc/receita': Index,
  '/myfinc/despesa': Index,
}

new Vue({
  el: '#app',
  store,
  router,

  data: {
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute] 
    }
  },

  render (h) { return h(this.ViewComponent) }
})

// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount('#app')