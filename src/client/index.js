/* Loads CSS files */
require('font-awesome-webpack');
require('./scss/index.scss');

/* Setup Vue components */
const Vue = require('vue/dist/vue');

const productGrid = require('./vue/components/product/product-grid.vue');

Vue.component('product-grid', productGrid);

new Vue({
  el: '#vue-app'
});
