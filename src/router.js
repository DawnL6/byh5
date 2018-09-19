import Vue from 'vue'
import Router from 'vue-router'
import Greenhouse from './views/greenhouse/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/greenhouse',
      component: Greenhouse
    },
    {
      path: '/coupon',
      component: () => import('./views/coupon/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('./views/coupon/coupon.vue'),
        },
        {
          path: 'addCoupon',
          component: () => import('./views/coupon/addCoupon.vue'),
        },
        {
          path: 'couponHistory',
          component: () => import('./views/coupon/couponHistory.vue'),
        }
      ]
    }
  ]
})
