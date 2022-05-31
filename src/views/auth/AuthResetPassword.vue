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
    <div class="groupForm">
      <i class="far fa-key"></i>
      <input 
        type="password" 
        name="password_confirmation" 
        placeholder="Confirme sua senha" 
        v-model="password_confirmation"
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
</template>

<script>
import { ref } from '@vue/reactivity'
import router from '@/router'
import ResetPasswordService from "@/services/reset.password.service"

export default {
    name: 'AuthResetPassword',
    props: {
      token: {
        required: true,
        type: String
      }
    },
    setup(props) {
      const email = ref("")
      const password = ref("")
      const password_confirmation = ref("")
      const loading = ref(false)

      const auth = () => {
        loading.value = true

        ResetPasswordService.resetPassword({
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value,
          token: props.token
        })
        .then(() => router.push({name: 'auth.login'}))
        .catch(() => alert('error'))
        .finally(() => loading.value = false)
      }

      return {
        auth,
        email,
        password,
        password_confirmation,
        loading
      }
    }
}
</script>