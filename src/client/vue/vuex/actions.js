const app = require('../feathers-client');

module.exports = {
  login: ({commit}, credentials) => {
    return new Promise((resolve, reject) => {
      app.authenticate({
        type: credentials.type || 'local',
        email: credentials.email,
        password: credentials.password
      })
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
  }
}
