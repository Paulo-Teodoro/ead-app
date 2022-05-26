import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import UserSupports from '@/views/supports/UserSupportsView.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import AuthTemplate from '@/views/auth/AuthTemplate.vue'
import AuthLogin from '@/views/auth/AuthLogin.vue'
import AuthForgetPassword from '@/views/auth/AuthForgetPassword.vue'

const routes = [
  {
    path:'/',
    name: 'auth.template',
    component: AuthTemplate,
    children: [
      {
        path:'/',
        name: 'auth.login',
        component: AuthLogin,
      },
      {
        path:'/recuperar-senha',
        name: 'auth.forget.password',
        component: AuthForgetPassword,
      }
    ]
  },
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
