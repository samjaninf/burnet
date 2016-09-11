<template>
  <div class="product-grid">
    <product-grid-item v-for='product in products' :name='product.name' :image='product.image' :style='gridItemStyle' />
  </div>
</template>
<script>
  const app = require('../../feathers-client');
  const constants = require('../../config/constants.config')
  const config = require('../../config/components/product/product-grid.config')

  const productGridItem = require('./product-grid-item.vue');

  const productService = app.service(constants.SERVICES.PRODUCTS);

  module.exports = {
    props: {
      perRow: {
        type: Number,
        default: 3
      }
    },

    data() {
      return {
        message: 'Hello, Vue!',
        products: [],
        gridItemStyle: {}
      }
    },

    created() {
      let marginLeft = `${2 / this.perRow}%`;
      let marginRight = `${2 / this.perRow}%`;
      let maxWidth = 96 / this.perRow + '%';

      this.gridItemStyle = {
        marginLeft,
        marginRight,
        maxWidth
      }

      productService.find({
        $limit: config.PAGE_SIZE
      })
      .then(page => {
        this.products = page.data;
      });
    },

    components: {
      'product-grid-item': productGridItem
    }
  }
</script>
<style lang="sass">
  .product-grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>
