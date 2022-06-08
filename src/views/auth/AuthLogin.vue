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
        :type="typePassword" 
        name="password" 
        placeholder="Senha" 
        v-model="password"
        required 
      />
      <i class="far fa-eye buttom" @click="toggleShowPassword"></i>
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
      <router-link :to="{name: 'auth.forgot.password'}" class="link primary">Clique aqui</router-link>
    </p>
  </span>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import router from '@/router'
import { notify } from "@kyvg/vue3-notification";

export default {
    name: 'AuthLogin',
    setup() {
      const store = new useStore()

      const email = ref("")
      const password = ref("")
      const loading = ref(false)

      const typePassword = ref('password')
      const toggleShowPassword = () => typePassword.value = typePassword.value === 'password' ? 'text' : 'password'

      const auth = () => {
        loading.value = true

        store.dispatch('auth', {
          email: email.value,
          password: password.value,
          device_name: 'teste_vue_3'
        })
        .then(() => {
          notify({
            title: "Sucesso",
            text: "Login efetuado com sucesso"
          })
          router.push({name: 'campus.home'})
        })
        .catch((error) => {
          let msgError = 'Falha na requisição'

          if(error.status === 422) msgError = 'Dados Inválidos'

          notify({
            title: "Falha ao Autenticar",
            text: msgError,
            type: "warn"
          })
        })
        .finally(() => loading.value = false)
      }

      return {
        auth,
        email,
        password,
        loading,
        typePassword,
        toggleShowPassword
      }
    }
}
</script>