<template lang="pug">
  a.product-grid-item(class='', :href='url')
    figure
      img(class='', :src='image')
    figcaption.text-center {{name}}
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
      },

      url: {
        type: String,
        required: true
      }
    }
  }
</script>
