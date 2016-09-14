<template lang="pug">
div.p-3
  button.btn.btn-google.mt-2 Acessar com o Google
  button.btn.btn-facebook.mt-1 Acessar com o Facebook
  div.mt-3 ou
  form.form
    input(type='email' placeholder='E-mail')
    input(type='password' placeholder='Senha')
    input.btn.btn-primary(type='submit' value='Acessar')
    div.mt-3.mb-3
      a.link Esqueci minha senha
</template>
<script>
module.exports = {
  data() {
    return {}
  }
}
</script>
<style>
</style>
