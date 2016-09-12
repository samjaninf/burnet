<template lang="pug">
  .product-grid
    product-grid-item(v-for='product in products', :name='product.name', :image='product.image', :style='gridItemStyle')
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
      },
      userId: {
        type: Number
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
      const marginWidth =  100 - config.GRID_CONTENT_WIDTH;
      const marginLeft = `${(marginWidth / 2) / this.perRow}%`;
      const marginRight = `${(marginWidth / 2) / this.perRow}%`;
      const maxWidth = config.GRID_CONTENT_WIDTH / this.perRow + '%';

      this.gridItemStyle = {
        marginLeft,
        marginRight,
        maxWidth
      }

      const query = {};
      if (this.userId)
        query.userId = this.userId;

      productService.find({
        query,
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
