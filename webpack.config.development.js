const webpack = require('webpack');
const baseConfig = require('./webpack.config');

const config = Object.create(baseConfig);
config.debug = true;

config.entry = [
  'webpack-hot-middleware/client?path=http://localhost:3030/__webpack_hmr',
  './src/client/index.js'
];

config.output.publicPath = 'http://localhost:3030/dist/';

config.module.loaders.push({
  test: /\.css$/,
  loaders: [
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'
  ]
}, {
  test: /\.scss$/,
  loaders: ["style", "css", "sass"]
}, {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: "url-loader?limit=10000&mimetype=application/font-woff"
}, {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: "file-loader"
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
);

module.exports = config;
