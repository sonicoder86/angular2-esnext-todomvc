'use strict';
let commonConfig = require('./webpack.common.config');
let webpack = require('webpack');
let path = require('path');
let merge = require('webpack-merge');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let npmLifecycleEvent = process.env.npm_lifecycle_event || '';
let environment = process.env.NODE_ENV || '';

let contextReplacementPlugin = new webpack.ContextReplacementPlugin(
  // The (\\|\/) piece accounts for path separators in *nix and Windows
  /angular(\\|\/)core(\\|\/)@angular/,
  path.join(process.cwd(), 'src')
);
let commonPlugins = [
  new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity }),
  new ExtractTextPlugin('style.bundle.css'),
  new webpack.ProgressPlugin(),
  contextReplacementPlugin
];

let cssLoader = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  })
};

let entry = {
  'main': './app/main.js',
  'vendor': './app/vendor.js',
  'style': './app/style.js',
};

let output = {
  path: path.resolve(process.cwd(), 'dist'),
  filename: '[name].bundle.js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[id].chunk.js'
};

if (npmLifecycleEvent == 'build' || environment == 'production') {
  module.exports = merge.smart(commonConfig, {
    entry: entry,
    output: output,

    plugins: commonPlugins.concat([
      new webpack.LoaderOptionsPlugin({
        debug: false,
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        mangle: { screw_ie8 : true },
        compress: {
          screw_ie8: true,
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: 'index.html' },
        { from: 'favicon.ico' }
      ])
    ]),

    module: {
      rules: [cssLoader]
    },

    devtool: 'source-map'
  });
} else if (npmLifecycleEvent.indexOf('test') !== -1 || environment == 'test') {
  module.exports = merge.smart(commonConfig, {
    devtool: 'inline-source-map',

    plugins: [contextReplacementPlugin, new webpack.ProgressPlugin()]
  });
} else {
  module.exports = merge.smart(commonConfig, {
    entry: entry,
    output: output,

    plugins: commonPlugins,

    module: {
      rules: [cssLoader]
    },

    devServer: {
      contentBase: './src',
      port: 3000,
      inline: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 500
      },
      stats: 'errors-only'
    },

    devtool: 'cheap-module-source-map'
  });
}
