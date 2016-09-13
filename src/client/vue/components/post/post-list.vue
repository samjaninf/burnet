<template lang="pug">
  .post-list
    post-list-item(class='', :name='name', :createdAt='createdAt', :content='content')
</template>
<script>
const postListItem = require('./post-list-item.vue');
module.exports = {
  data() {
    return {
      name: 'flic',
      createdAt: '2016-08-16',
      content: 'This work looks amazing, i really wish i had the money for it right now :/'
    }
  },

  components: {
    'post-list-item': postListItem
  }
}
</script>
<style lang="sass">
$post-border-radius: 4px;
$post-border: solid 1px gray;

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
