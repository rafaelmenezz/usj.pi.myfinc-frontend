import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App'
import Home from '@/components/templates/home/content/home'
import About from '@/components/templates/home/content/about'
import Login from '@/components/templates/home/content/login'
import Myfinc from'@/Home'
import Mural from '@/components/templates/app/Mural'
import Perfil from '@/components/templates/app/Perfil'
import Receita from '@/components/templates/app/Receita'
import Despesa from '@/components/templates/app/Despesa'


Vue.use(VueRouter)

const routes = [

    {
        name: 'home',
        path: '/home',
        components: {
            default: App,
            mainApp: Home,
          }
    },
    {
        name: 'sobre',
        path: '/about',
        components: {
            default: App,
            mainApp: About,
          }
    },{
        name: 'login',
        path: '/login',
        components: {
            default: App,
            mainApp: Login,
          }
    },
    {
        name: 'myfinc',
        path: '/myfinc/mural',
        components: {
            default: Myfinc,
            home: Mural,
          }
    },
    {
        name: 'perfil',
        path: '/myfinc/perfil',
        components: {
            default: Myfinc,
            home: Perfil,
          }
    },
    {
        name: 'receita',
        path: '/myfinc/receita',
        components: {
            default: Myfinc,
            home: Receita,
          }
    },
    {
        name: 'despesa',
        path: '/myfinc/despesa',
        components: {
            default: Myfinc,
            home: Despesa,
          }
    },
    
 {
    path: '/myfinc',
    redirect: '/myfinc/mural'
}, {
    path: '/',
    redirect: '/home'
}]

export default new VueRouter({
    mode: 'history',
    routes
})

