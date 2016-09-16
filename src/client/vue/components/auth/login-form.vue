<template lang="pug">
div.p-3
  button.btn.btn-google.mt-2 Acessar com o Google
  button.btn.btn-facebook.mt-1 Acessar com o Facebook
  div.mt-3.text-center ou
  form.form(@submit.prevent='login({email: email, password: password})')
    input(type='email' placeholder='E-mail' v-model='email')
    input(type='password' placeholder='Senha' v-model='password')
    input.btn.btn-primary(type='submit' value='Acessar')
    div.mt-3.mb-3.text-center
      a.link Esqueci minha senha
</template>
<script>
const vuex = require('vuex');

module.exports = {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: vuex.mapActions(['login'])
}
</script>
<style>
</style>
