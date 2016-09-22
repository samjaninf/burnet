const Vue = require('vue');
const Vuex = require('vuex');

const productGrid = require('./components/product/product-grid.vue');
const postList = require('./components/post/post-list.vue');
const loginButton = require('./components/auth/login-button.vue');
const userAvatar = require('./components/user/user-avatar.vue');
const userAvatarControls = require('./components/user/user-avatar-controls.vue');

Vue.component('product-grid', productGrid);
Vue.component('post-list', postList);
Vue.component('login-button', loginButton);
Vue.component('user-avatar', userAvatar);
Vue.component('user-avatar-controls', userAvatarControls);

const store = require('./vuex/store');

store.dispatch('login');

new Vue({
  el: '#vue-app',
  store: store,
  computed: Vuex.mapGetters(['user'])
});
