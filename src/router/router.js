import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import { getToken, removeToken, setToken } from '../utils/permission'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // 控制滚动条回到顶部
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/',
      component: () => import('@/views/layout/index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard')
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile')
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications')
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons')
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography')
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables')
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps')
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade')
        }
      ]
    }
  ]
})

beforeRouter()

const whiteList = ['/login', '/404']

function beforeRouter() {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    console.log(getToken())
    if (getToken()) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        // 判断当前用户是否已拉取完user_info信息
        // 根据用户权限添加动态路由
        next()
      }
    } else if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  })
  router.afterEach(() => {
    NProgress.done()
  })
}

export default router
