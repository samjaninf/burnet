<template lang="pug">
  div.d-flex.jc-center
    button.btn.mt-0(@click='togglePopover')
      span {{ label }}
    popover(v-if='popoverActive')
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
    return {
      popoverActive: false
    }
  },

  methods: {
    togglePopover: function() {
      this.popoverActive = !this.popoverActive;
    }
  },

  components: {
    popover: popover,
    'login-form': loginForm
  }
};
</script>
<style lang="sass">
</style>
