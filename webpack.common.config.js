'use strict';
let path = require('path');

module.exports = {
  context: path.join(process.cwd(), 'src'),

  resolve: {
    root: [ path.join(process.cwd(), 'src') ],
    extensions: ['', '.ts', '.js', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest', 'angular2']
        }
      },
      {
        test: /\.js$/,
        loader: 'source-map',
        exclude: [
          path.join(process.cwd(), 'node_modules/rxjs'),
          path.join(process.cwd(), 'node_modules/@angular')
        ]
      },
      { test: /\.html$/, loader: 'html?attrs=false&caseSensitive&removeAttributeQuotes=false' }
    ]
  },

  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  },

  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
