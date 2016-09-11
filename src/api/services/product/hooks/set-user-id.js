'use strict';

module.exports = options => {
  return hook => {
    const user = hook.params.user;
    hook.data = Object.assign({}, hook.data, {
      userId: user._id
    });
  };
};
