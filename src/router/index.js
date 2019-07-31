import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/introduction/Introduction'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    }
  ]
})
