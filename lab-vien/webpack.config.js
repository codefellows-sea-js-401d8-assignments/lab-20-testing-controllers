'use strict';

const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/index.js`,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractText('bundle.css'),
  ],
  sassLoader: {
    includePaths: `${__dirname}/app/style/scss/`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!'),
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
