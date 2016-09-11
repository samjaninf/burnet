<template>
  <div class='product-grid-item'>
    <figure class='product-grid-item_image'>
      <img :src='image'>
    </figure>
    <figcaption class="text-center">{{name}}</figcaption>
  </div>
</template>
<script>
  const config = require('../../config/components/product/product-grid-item.config.js');
  module.exports = {
    props: {
      image: {
        type: String,
        default: config.IMAGE_NOT_FOUND
      },

      name: {
        type: String,
        required: true
      }
    }
  }
</script>
<style lang="sass">
  .product-grid-item {

  }
</style>
