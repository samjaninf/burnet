<template lang="pug">
  .user-avatar
      img(class='', :src='url')
</template>
<script>
module.exports = {
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="sass">
.user-avatar {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: inline-block;

  img {
    border-radius: 4px;
  }
}
</style>
