import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Company from '@/views/about/Company'
import Contact from '@/views/about/Contact'
import Culture from '@/views/about/Culture'
import Solution from '@/views/solution/Solution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 网站首页
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // 公司简介
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      // 联系方式
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      // 企业文化
      path: '/culture',
      name: 'Culture',
      component: Culture
    },
    {
      // 解决方案
      path: '/solution',
      name: 'Solution',
      component: Solution
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
