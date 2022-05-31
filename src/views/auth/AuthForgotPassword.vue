<template>
  <span class="description">
    Esqueceu sua senha? Fique tranquilo, iremos te ajudar!
  </span>
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" v-model="email" placeholder="Email" required />
    </div>
    <button 
      :class="[
        'btn',
        'primary',
        loading ? 'loading' : ''
      ]" 
      @click.prevent="forgotPassword" 
      type="submit"
    >
      <span v-if="loading">Enviando...</span>
      <span v-else>Recuperar Senha</span>
    </button>
  </form>
  <span>
    <p class="fontSmall">
        Acessar?
      <router-link :to="{name: 'auth.login'}" class="link primary">Clique aqui</router-link>
    </p>
  </span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    name: 'AuthForgotPassword',

    setup() {
      const store = new useStore()

      const email = ref("")
      const loading = ref(false)

      const forgotPassword = () => {
        loading.value = true

        store.dispatch('forgotPassword', {
          email: email.value
        })
        .then(() => alert('Confira o seu e-mail'))
        .catch(() => alert('error'))
        .finally(() => loading.value = false)
      }

      return {
        email,
        loading,
        forgotPassword
      }
    }
}
</script>