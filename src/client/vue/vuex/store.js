const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);

const getters = require('./getters');
const actions = require('./actions');
const mutations = require('./mutations');

const state = {
  user: {}
};

module.exports = new Vuex.Store({state, getters, actions, mutations});
