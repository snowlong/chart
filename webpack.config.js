/* eslint-env node */

const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    'main':  __dirname + '/src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'dist.js'
  },
  module: {
    rules: [
      // es6で書かれたコードをes5互換にして読み込む。
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  devtool: 'source-map',

};