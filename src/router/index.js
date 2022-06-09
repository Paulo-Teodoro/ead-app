import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import UserSupports from '@/views/supports/UserSupportsView.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import AuthTemplate from '@/views/auth/AuthTemplate.vue'
import AuthLogin from '@/views/auth/AuthLogin.vue'
import AuthForgotPassword from '@/views/auth/AuthForgotPassword.vue'
import AuthResetPassword from '@/views/auth/AuthResetPassword.vue'

import store from "@/store"
import { TOKEN_NAME } from "@/configs"

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
        name: 'auth.forgot.password',
        component: AuthForgotPassword,
      },
      {
        path:'/reset-password/:token',
        name: 'auth.reset.password',
        component: AuthResetPassword,
        props: true
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

router.beforeEach(async (to, _, next) => {
  const loggedIn = store.state.users.loggedIn
  if (to.name != 'reset.password' && !loggedIn) {
    const token = await localStorage.getItem(TOKEN_NAME)
    if (!token && to.name != 'auth.login' && to.name != 'forgot.password') {
      return router.push({name: 'auth.login'})
    }

    await store.dispatch('getUser')
                .catch(() => {
                  if (to.name != 'auth.login') return router.push({name: 'auth.login'})
                })
  }

  next()
})

export default router
