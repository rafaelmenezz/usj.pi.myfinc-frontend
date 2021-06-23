import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/templates/home/content/home'
import About from '@/components/templates/home/content/about'
import Login from '@/components/templates/home/content/login'
import Signup from '@/components/templates/home/content/login'

Vue.use(VueRouter)

const routes = [{
    name:'home',
    path: '/', 
    component: Home
}, {
    name:'about',
    path: '/about',
    component: About
}, {
    name:'login',
    path: '/login',
    component: Login
}, {
    name:'signup',
    path: '/signup',
    component: Signup
}]

export default  new VueRouter({
    mode: 'history',
    routes
})

