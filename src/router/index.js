import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import WallMessage from '@/views/WallMessage.vue'
import JoinUs from '@/views/Join/JoinUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      // name的话可以用于动态路由的跳转router.push({ name: 'detail', params: { id: 123 } })
      //<router-link> 可以直接用 :to="{ name: 'home' }
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'wallmessage',
          component: WallMessage,
        },
        {
          path: 'join',
          name: 'join',
          component: JoinUs,
        },
      ],
    },
    {
      path: '/register',
      component: () => import('@/views/register/index.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
    // ✅ 兜底404页面
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
