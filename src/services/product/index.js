'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'products.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/products', service(options));

  // Get our initialize service to that we can bind hooks
  const productService = app.service('/products');

  // Set up our before hooks
  productService.before(hooks.before);

  // Set up our after hooks
  productService.after(hooks.after);
};
