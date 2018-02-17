import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import Login from '@/page/login'
import Register from '@/page/register'
import Home from '@/page/home'
import List from '@/page/list'
import ListAll from '@/page/listAll'
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
          next('/home/list')
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
      path: '/listAll',
      name: 'ListAll',
      component: ListAll
    },
    {
      path: '/detail/:blogID',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (Cookies.get('puid') && Cookies.get('token')) {
          next()
        } else {
          next('/listAll')
        }
      },
      children: [
        {
          path: 'list',
          name: 'List',
          component: List
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
