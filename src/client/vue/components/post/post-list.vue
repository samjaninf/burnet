<template lang="pug">
  .post-list
    post-list-item(v-for='post in posts' class='', :name='name', :createdAt='post.createdAt', :content='post.content')
</template>
<script>
const postListItem = require('./post-list-item.vue');

const constants = require('../../config/constants.config');
const app = require('../../feathers-client');
const postService = app.service(constants.SERVICES.POSTS);

module.exports = {
  props: {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: Number
    },
    productId: {
      type: Number
    }
  },

  data() {
    return {
      posts: []
    }
  },

  components: {
    'post-list-item': postListItem
  },

  created() {
    const query = {};
    if (this.userId) query.userId = this.userId;
    if (this.productId) query.productId = this.productId;
    postService.find({
      query
    })
    .then(resp => {
      this.posts = resp.data;
    });
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
