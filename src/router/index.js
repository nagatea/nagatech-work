import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Works from '@/components/Works'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    }
  ]
})
