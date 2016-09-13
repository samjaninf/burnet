/* Loads CSS files */
require('font-awesome-webpack');
require('./scss/index.scss');

/* Setup Vue components */
const Vue = require('vue/dist/vue');

const productGrid = require('./vue/components/product/product-grid.vue');
const postList = require('./vue/components/post/post-list.vue');

Vue.component('product-grid', productGrid);
Vue.component('post-list', postList);

new Vue({
  el: '#vue-app'
});
