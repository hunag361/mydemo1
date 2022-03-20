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
  },
  {
    path: '/shall',
    component: ()=>import('../views/shallowReactive与shallowRef.vue')
  },
  {
    path: '/readonly',
    component: ()=>import('../views/readonly与shallowReadonly.vue')
  },
  {
    path: '/toRaw',
    component: ()=>import('../views/toRaw和markRaw.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
