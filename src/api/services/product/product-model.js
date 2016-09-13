'use strict';

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const product = sequelize.define('products', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    featuredIndex: {
      type: Sequelize.INTEGER,
      defaultValue: -1
    },
    description: {
      type: Sequelize.STRING(1024),
      defaultValue: ''
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate(models) {
        product.hasMany(models.posts);
      }
    }
  });

  return product;
};
