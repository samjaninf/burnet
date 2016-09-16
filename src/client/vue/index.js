const Vue = require('vue');
const Vuex = require('vuex');

const productGrid = require('./components/product/product-grid.vue');
const postList = require('./components/post/post-list.vue');
const loginButton = require('./components/auth/login-button.vue');

Vue.component('product-grid', productGrid);
Vue.component('post-list', postList);
Vue.component('login-button', loginButton);

const store = require('./vuex/store');

new Vue({
  el: '#vue-app',
  store: store,
  computed: Vuex.mapGetters(['user'])
});
