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
import Error from '@/page/error'

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
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/home/list'
        },
        {
          path: 'list',
          name: 'List',
          component: List,
          beforeEnter: (to, from, next) => {
            if (Cookies.get('puid') && Cookies.get('token')) {
              next()
            } else {
              next('/home/listAll')
            }
          }
        },
        {
          path: 'editor',
          name: 'Editor',
          component: Editor,
          beforeEnter: (to, from, next) => {
            if (Cookies.get('puid') && Cookies.get('token')) {
              next()
            } else {
              next('/home/listAll')
            }
          }
        },
        {
          path: 'listALl',
          name: 'ListAll',
          component: ListAll
        },
        {
          path: 'detail/:blogID',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
