/* eslint-disable no-return-assign */

module.exports = {
  SET_USER: (state, user) => state.user = user,
  CLEAR_USER: (state, user) => state.user = {}
};
