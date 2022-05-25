import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import UserSupports from '@/views/supports/UserSupportsView.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: '',
        name: 'campus.home',
        component: HomeView,
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.user.supports',
        component: UserSupports,
      },
      {
        path: 'modulos',
        name: 'campus.modules',
        component: ModulesAndLessons,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
