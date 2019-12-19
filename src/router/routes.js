/* 
所有路由配置的数组
*/

import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'
import Shop from '@/pages/Shop/Shop'
import Goods from '@/pages/Shop/Goods'
import Ratings from '@/pages/Shop/Ratings'
import Info from '@/pages/Shop/Info'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    name: 'shop',
    path: '/shop/:id',
    component: Shop,
    props: true,
    children: [
      {
        name: 'goods',
        path: 'goods',
        component: Goods
      },
      {
        path: 'ratings',
        component: Ratings
      },
      {
        path: 'info',
        component: Info
      },

      {
        path: '',
        redirect: (to) => {
          console.log('to', to)
          return to.path + '/goods'
        }
        /* 
        redirect: {
          name: 'goods'
        } */
      },
    ]
  },

  {
    path: '/',
    redirect: '/msite'
  }
]