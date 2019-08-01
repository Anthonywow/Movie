import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/pages/introduction/Introduction'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }// 设置规范的滚动行为
})
