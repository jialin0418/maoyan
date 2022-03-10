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
        redirect: '/homeBar/recommendBar',
        component: () => import('@/views/homeBar'),
        children: [
          {
            path: '/homeBar/recommendBar',
            name: 'RecommendBar',
            component: () => import('@/views/homeBar/children/recommendBar'),
          },
          {
            path: '/homeBar/UnscrambleBar',
            name: 'UnscrambleBar',
            component: () => import('@/views/homeBar/children/UnscrambleBar'),
          },
          {
            path: '/homeBar/NoticeBar',
            name: 'NoticeBar',
            component: () => import('@/views/homeBar/children/NoticeBar'),
          },
          {
            path: '/homeBar/filmBar',
            name: 'filmBar',
            component: () => import('@/views/homeBar/children/filmBar'),
          },
          {
            path: '/homeBar/goodBar',
            name: 'goodBar',
            component: () => import('@/views/homeBar/children/goodBar'),
          },
          {
            path: '/homeBar/dramaBar',
            name: 'dramaBar',
            component: () => import('@/views/homeBar/children/dramaBar'),
          },
        ]
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
