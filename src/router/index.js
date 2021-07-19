import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import RegisterTable from '../views/RegisterTable'
import Tables from '../views/Tables'
import Table from '../views/Table'
import Regras from '../views/Regras'

Vue.use(VueRouter)

const routes = [
  {
    path: '/regras',
    name: 'Regras',
    component: Regras
  },
  {
    path: '/table/:id',
    name: 'Table',
    component: Table
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/register/table',
    name: 'RegisterTable',
    component: RegisterTable
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
