'use strict';
let commonConfig = require('./webpack.common.config');
let webpack = require('webpack');
let merge = require('webpack-merge');
let CopyWebpackPlugin = require('copy-webpack-plugin');

if (process.env.npm_lifecycle_event == 'build' || process.env.NODE_ENV == 'production') {
  module.exports = merge.smart(commonConfig, {
    debug: false,

    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: 'index.html' },
        { from: 'favicon.ico' },
        { from: 'api', to: 'api' },
        { from: 'img', to: 'img' }
      ])
    ],

    devtool: 'source-map'
  });
} else {
  module.exports = merge.smart(commonConfig, {
    debug: true,

    devServer: {
      contentBase: './src',
      port: 3000,
      inline: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 500
      }
    },

    devtool: 'cheap-module-source-map'
  });
}
