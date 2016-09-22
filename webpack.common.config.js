'use strict';
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: {
    'main': './app/main.js',
    'vendor': './app/vendor.js',
    'style': './app/style.js',
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  context: path.join(__dirname, 'client'),

  resolve: {
    root: [ path.join(__dirname, 'client') ],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
    new ExtractTextPlugin('style.bundle.css'),
    new ProgressBarPlugin()
  ],

  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'angular2']
        }
      },
      { test: /\.html$/, loader: 'html?attrs=false' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') }
    ]
  }
};
