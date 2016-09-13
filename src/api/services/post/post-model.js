'use strict';

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const post = sequelize.define('posts', {
    content: {
      type: Sequelize.STRING(512),
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  return post;
};
