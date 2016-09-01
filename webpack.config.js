'use strict';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'angular2']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },

  resolve: {
    alias: {
      '@angular/common': '@angular/common/bundles/common.umd.min.js',
      '@angular/core': '@angular/core/bundles/core.umd.min.js',
      '@angular/router': '@angular/router/bundles/router.umd.min.js',
      '@angular/forms': '@angular/forms/bundles/forms.umd.min.js',
      '@angular/http': '@angular/http/bundles/http.umd.min.js',
      '@angular/compiler': '@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js'
    }
  },

  devtool: 'source-map'
};
