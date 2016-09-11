/* Snippet required for hot reloading. */
if (module.hot) {
  module.hot.accept();
}

/* Loads CSS files */
require('font-awesome-webpack');
require('./scss/index.scss');

const Vue = require('vue/dist/vue');

const productGrid = require('./vue/components/product-grid.vue');

Vue.component('product-grid', productGrid);

new Vue({
  el: '#vue-app'
});
