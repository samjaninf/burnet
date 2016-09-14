<template lang="pug">
  button.btn.d-flex.jc-center
    span {{ label }}
    popover
      login-form(width='')
</template>
<script>
const popover = require('../commons/popover/popover.vue');
const loginForm = require('./login-form.vue');

module.exports = {
  props: {
    label: {
      type: String,
      required: true
    }
  },

  data() {
    return {}
  },

  components: {
    popover: popover,
    'login-form': loginForm
  }
};
</script>
<style lang="sass">
</style>
