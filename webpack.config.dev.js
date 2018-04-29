const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/',
    filename: 'app.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "static"),
    port: 8084,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.dev.html',
      inject: false,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "static/"),
        to: path.resolve(__dirname, "dist/")
      }
    ]),
  ],
});

module.exports = config;
