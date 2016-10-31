'use strict';
let commonConfig = require('./webpack.common.config');
let webpack = require('webpack');
let merge = require('webpack-merge');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');

let npmLifecycleEvent = process.env.npm_lifecycle_event || '';
let environment = process.env.NODE_ENV || '';

let commonPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
  new ExtractTextPlugin('style.bundle.css'),
  new ProgressBarPlugin()
];
let cssLoader = { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') };
let entry = {
  'main': './app/main.js',
  'vendor': './app/vendor.js',
  'style': './app/style.js',
};
let output = {
  path: './dist',
  filename: '[name].bundle.js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[id].chunk.js'
};

if (npmLifecycleEvent == 'build' || environment == 'production') {
  module.exports = merge.smart(commonConfig, {
    debug: false,

    entry: entry,
    output: output,

    plugins: commonPlugins.concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: 'index.html' },
        { from: 'favicon.ico' }
      ])
    ]),

    module: {
      loaders: [cssLoader]
    },

    devtool: 'source-map'
  });
} else if (npmLifecycleEvent.indexOf('test') !== -1 || environment == 'test') {
  module.exports = merge.smart(commonConfig, {
    debug: true,

    devtool: 'inline-source-map'
  });
} else {
  module.exports = merge.smart(commonConfig, {
    debug: true,

    entry: entry,
    output: output,

    plugins: commonPlugins,

    module: {
      loaders: [cssLoader]
    },

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
