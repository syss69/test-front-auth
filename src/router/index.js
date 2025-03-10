import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectionView from "../views/ConnectionView.vue"
import MyProfileView from "../views/MyProfileView.vue"
import { checkAuth } from '@/utils/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/connection",
      name: "connection",
      component: ConnectionView,
      meta: { requiresAuth: false },
    },
    {
      path: '/profile',
      name: 'profile',
      component: MyProfileView,
      meta: { requiresAuth: true },
    }
  ],
})

router.beforeEach(async (to , from , next) => {
  if (to.meta.requiresAuth) {
  const isTokenOk = await checkAuth();
  if(isTokenOk){
    next()
  }else{
    next('/connection')
  }
  }else{
    next()
  }
})

export default router
