import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/HomeView',
    component: ()=>import('../views/HomeView.vue')
  },
  {
    path: '/home',
    component: ()=>import('../views/home.vue')
  },
  {
    path: '/watch',
    component: ()=>import('../views/watchCom.vue')
  },
  {
    path: '/father',
    component: ()=>import('../views/father.vue')
  },
  {
    path: '/hook',
    component: ()=>import('../views/hook.vue')
  },
  {
    path: '/toRefs',
    component: ()=>import('../views/toRefs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
