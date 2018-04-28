const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/',
    filename: 'app.js',
  },
  devServer: {
    contentBase: false,
    port: 8084,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.dev.html',
      inject: false,
    }),
  ],
});

module.exports = config;
