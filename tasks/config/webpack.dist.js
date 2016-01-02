'use strict';
let webpack = require('webpack');
let config = require('./webpack');

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    comments: false
  })
];

module.exports = config;
