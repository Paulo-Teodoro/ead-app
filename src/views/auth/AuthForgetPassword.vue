<template>
  <span class="description">
    Esqueceu sua senha? Fique tranquilo, iremos te ajudar!
  </span>
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="Email" required />
    </div>
    <button class="btn primary" type="submit">Recuperar Senha</button>
  </form>
  <span>
    <p class="fontSmall">
        Acessar?
      <router-link :to="{name: 'auth.login'}" class="link primary">Clique aqui</router-link>
    </p>
  </span>
</template>

<script>
export default {
    name: 'AuthForgetPassword'
}
</script>