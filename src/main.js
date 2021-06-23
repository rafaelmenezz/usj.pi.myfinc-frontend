import 'font-awesome/css/font-awesome.css';


import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

import './config/axios'
import './config/msgs'
import './config/uikit'

import store from './config/store'
import router from './config/router'



Vue.config.productionTip = false


const routes = {
  '/': Home,
  '/myfinc': App
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