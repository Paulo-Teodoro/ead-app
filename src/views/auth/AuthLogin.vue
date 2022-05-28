<template>
  <span class="description">
    Acesse nossa plataforma e desfrute de cursos completos para sua
    especialização.
  </span>
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        v-model="email"
        required 
      />
    </div>
    <div class="groupForm">
      <i class="far fa-key"></i>
      <input 
        type="password" 
        name="password" 
        placeholder="Senha" 
        v-model="password"
        required 
      />
      <i class="far fa-eye buttom"></i>
    </div>
    <button 
      :class="[
        'btn',
        'primary',
        loading ? 'loading' : ''
      ]" 
      @click.prevent="auth" 
      type="submit"
    >
      <span v-if="loading">Enviando...</span>
      <span v-else>Login</span>
    </button>
  </form>
  <span>
    <p class="fontSmall">
      Esqueceu sua senha? 
      <router-link :to="{name: 'auth.forget.password'}" class="link primary">Clique aqui</router-link>
    </p>
  </span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import router from '@/router'

export default {
    name: 'AuthLogin',
    setup() {
      const store = new useStore()

      const email = ref("")
      const password = ref("")
      const loading = ref(false)

      const auth = () => {
        loading.value = true

        store.dispatch('auth', {
          email: email.value,
          password: password.value,
          device_name: 'teste_vue_3'
        })
        .then(() => router.push({name: 'campus.home'}))
        .catch(() => alert('error'))
        .finally(() => loading.value = false)
      }

      return {
        auth,
        email,
        password,
        loading
      }
    }
}
</script>