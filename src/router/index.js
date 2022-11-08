import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
  ]
})
