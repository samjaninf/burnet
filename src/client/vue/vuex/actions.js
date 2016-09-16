const app = require('../feathers-client');

module.exports = {
  login: ({commit}, credentials) => {
    return new Promise((resolve, reject) => {
      app.authenticate(credentials)
      .then(response => {
        const user = response.data;
        user.token = response.token;
        commit('SET_USER', user);
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
    });
  },

  logout: ({commit}) => {
    return new Promise((resolve, reject) => {
      app.logout();
      commit('CLEAR_USER');
      resolve();
    });
  }
}
