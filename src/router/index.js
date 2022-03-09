import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabsBar',
    redirect: '/homeBar',
    component: () => import('@/views/tabsBar'),
    children: [
      {
        path: '/homeBar',
        name: 'homeBar',
        component: () => import('@/views/homeBar')
      },
      {
        path: '/cinemaBar',
        name: 'cinemaBar',
        component: () => import('@/views/cinemaBar')
      },
      {
        path: '/performBar',
        name: 'performBar',
        component: () => import('@/views/performBar')
      },
      {
        path: '/sportsBar',
        name: 'sportsBar',
        component: () => import('@/views/sportsBar')
      },
      {
        path: '/myBar',
        name: 'myBar',
        component: () => import('@/views/myBar')
      },
    ]

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
