import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import Login from '@/page/login'
import Register from '@/page/register'
import Home from '@/page/home'
import List from '@/page/list'
import Editor from '@/page/editor'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (Cookies.get('puid') && Cookies.get('token')) {
          next(from)
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (Cookies.get('puid') && Cookies.get('token')) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: List
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor
        },
        {
          path: 'detail/:blogID',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
