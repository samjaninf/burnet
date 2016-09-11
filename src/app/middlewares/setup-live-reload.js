const livereload = require('express-livereload');
const connectLiveReload = require('connect-livereload');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./../../../webpack.config.development');
const compiler = webpack(webpackConfig);

/**
 * Sets up live reload middlewares.
 * @param {Object} app The express app to setup.
 */
function setupMiddlewares(app) {
  livereload(app, {});
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    },
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(connectLiveReload({
    port: 9091
  }));
}

module.exports = setupMiddlewares;
