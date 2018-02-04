import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Register from '@/page/register'
import Home from '@/page/home'
import List from '@/components/list'
import Editor from '@/page/editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
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
    }
  ]
})
