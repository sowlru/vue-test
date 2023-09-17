// run <layout-test /> to test
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layouts/HomeView.vue'

import shopProductsList from '@/sites/shop/shopProductsList.vue'
import shopCart from '@/sites/shop/shopCart.vue'
import shopCheckout from '@/sites/shop/shopCheckout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'default' },
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { layout: 'blank' },
    component: () =>
      import(/* webpackChunkName: "auth" */ '../layouts/AuthView.vue')
  },
  {
    path: '/list',
    component: shopProductsList
  },
  {
    path: '/cart',
    component: shopCart
  },
  {
    path: '/checkout',
    component: shopCheckout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  console.log('to', to)
  return true
})

export default router
