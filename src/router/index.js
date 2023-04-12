import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layouts/HomeView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
