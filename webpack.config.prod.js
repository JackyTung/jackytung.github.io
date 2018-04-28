const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/app.js',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin('main.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.prod.html',
    }),
  ],
});

module.exports = config;
