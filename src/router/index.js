import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List/List'
import ListNew from '@/components/List/ListNew'
import ListShow from '@/components/List/ListShow'
import Profile from '@/components/User/Profile'
import Login from '@/components/User/Login'
import Register from '@/components/User/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/list/new',
      name: 'List-new',
      component: ListNew
    },
    {
      path: '/list/show/:id',
      name: 'List-show',
      component: ListShow
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
