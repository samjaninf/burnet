<template lang="pug">
  .d-flex.jc-center
    .user-avatar(@click='showPopover()')
      img(class='', :src='url')
    popover(v-if='popoverActive', :width='\'auto\'')
      .d-flex.fd-column
        a.link.link-blue.text-center(class='', :href='user.url') Ver meu perfil
        a.link.link-blue.text-center(@click='logout()') Sair
</template>
<script>
const popover = require('../commons/popover/popover.vue');
const vuex = require('vuex');

module.exports = {
  props: {
    url: {
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
    showPopover() {
      // if the url we were given is the same as the current user url
      if (this.popoverActive) {
        this.popoverActive = false;
      }
      else if (this.url === this.user.image) {
        this.popoverActive = true;
      }
    },
    logout: function() {
      this.$store.dispatch('logout');
    }
  },

  components: {
    popover
  },

  computed: vuex.mapGetters(['user'])
};
</script>
<style lang="sass">
.user-avatar {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  border-radius: 8px;
}
</style>
