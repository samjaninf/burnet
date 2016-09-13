<template lang="pug">
  .post-item
    div {{name}} - {{moment(createdAt).format('DD/MM/YYYY')}}
    div {{content}}
</template>
<script>
const moment = require('moment');
module.exports = {
  props: {
    content: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    createdAt: {
      type: String,
      required: true
    }
  },

  data() {
    return {

    }
  },

  methods: {
    moment: moment
  }
}
</script>
<style lang="sass">
@import '../../../scss/variables';
$post-border-radius: 4px;
$post-border: solid 1px $granite;

.post-item {
  padding: 4px;
  border: $post-border;
  border-bottom: 0;

  &:first-of-type {
    border-top-left-radius: $post-border-radius;
    border-top-right-radius: $post-border-radius;
  }

  &:last-of-type {
    border-bottom-left-radius: $post-border-radius;
    border-bottom-right-radius: $post-border-radius;
    border-bottom: $post-border;
  }
}
</style>
