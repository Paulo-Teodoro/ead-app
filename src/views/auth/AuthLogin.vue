<template>
  <span class="description">
    Acesse nossa plataforma e desfrute de cursos completos para sua
    especialização.
  </span>
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="Email" required />
    </div>
    <div class="groupForm">
      <i class="far fa-key"></i>
      <input type="password" name="password" placeholder="Senha" required />
      <i class="far fa-eye buttom"></i>
    </div>
    <button class="btn primary" @click.prevent="auth" type="submit">Login</button>
  </form>
  <span>
    <p class="fontSmall">
      Esqueceu sua senha? 
      <router-link :to="{name: 'auth.forget.password'}" class="link primary">Clique aqui</router-link>
    </p>
  </span>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'AuthLogin',
    setup() {
      const store = new useStore()

      const auth = () => {
        store.dispatch('auth', {
          email: 'pauloteodoroti@gmail.com.br',
          password: '123456',
          device_name: 'teste_vue_3'
        })
      }

      return {
        auth
      }
    }
}
</script>