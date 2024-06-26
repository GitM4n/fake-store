import { createWebHashHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomePage 
  },
  { 
    path: '/product/:productId', 
    component: () => import('./pages/ProductPage.vue'),
    name:'product',
  },
  //{ path: '/:pathMatch(.*)*', component: () => import('./pages/NotFoundPage.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

