/* Loads CSS files */
require('font-awesome-webpack');
require('./scss/index.scss');

/* Setup Vue components */
const Vue = require('vue/dist/vue');

const productGrid = require('./vue/components/product/product-grid.vue');
const postList = require('./vue/components/post/post-list.vue');
const loginButton = require('./vue/components/auth/login-button.vue');

Vue.component('product-grid', productGrid);
Vue.component('post-list', postList);
Vue.component('login-button', loginButton);

new Vue({
  el: '#vue-app'
});
