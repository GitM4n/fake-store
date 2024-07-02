import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';



import HomePage from './pages/HomePage.vue'

const routes:Array<RouteRecordRaw> = [
  { 
    path: '/', 
    name: 'home',
    component: HomePage 
  },
  { 
    path: '/product/:productId', 
    component: () => import('./pages/ProductPage.vue'),
    name:'product',
    props: route => ({ productId: route.params.productId, gradientColor: route.query.gradientColor }),
  },
  //{ path: '/:pathMatch(.*)*', component: () => import('./pages/NotFoundPage.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

