'use strict';

const ExtractText = require('extract-text-webpack-plugin');

module.exports = exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractText('bundle.css')
  ],
  sassLoader: {
    includePaths: `${__dirname}/app/scss/lib`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style-loader', 'css!sass!'),
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
