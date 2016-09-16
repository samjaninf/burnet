<template lang="pug">
div.p-3
  button.btn.btn-google.mt-2 Acessar com o Google
  button.btn.btn-facebook.mt-1 Acessar com o Facebook
  div.mt-3.text-center ou
  form.form(@submit.prevent='login(\'local\')')
    input(type='email', placeholder='E-mail', v-model='email', :disabled='loading', v-on:change="disableCredentialsError()")
    input(type='password', placeholder='Senha', v-model='password', :disabled='loading', v-on:change="disableCredentialsError()")
    div.mt-3.mb-3.text-center(class='', v-if='credentialsError')
      span.color-alizarin Usuário ou senha incorretos.
    input.btn.btn-primary(type='submit', value='Acessar', :disabled='loading')
    div.mt-3.mb-3.text-center(class='', :disabled='loading')
      a.link(class='', :disabled='loading') Esqueci minha senha
</template>
<script>
const vuex = require('vuex');

module.exports = {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      credentialsError: false
    }
  },

  methods: {
    login: function(type) {
      loading = true;
      const credentials = {
        email: this.email,
        password: this.password,
        type: type || 'local'
      }
      this.$store.dispatch('login', credentials)
      .then(() => {
        this.loading = false;
        this.disableCredentialsError();
      })
      .catch(err => {
        this.loading = false;
        this.credentialsError = true;
      });
    },

    disableCredentialsError: function() {
      this.credentialsError = false;
    }
  }
}
</script>
<style>
</style>
