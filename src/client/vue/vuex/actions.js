const app = require('../feathers-client');

module.exports = {
  login: ({commit}, credentials) => {
    console.log(credentials);
    app.authenticate({
      type: credentials.type || 'local',
      email: credentials.email,
      password: credentials.password
    })
    .then(response => {
      const user = response.data;
      user.token = response.token;
      commit('SET_USER', user);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
