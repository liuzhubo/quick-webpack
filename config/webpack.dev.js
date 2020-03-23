const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const path = require('path');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9090,
    hot: true,
  },
};

module.exports = merge(baseConfig, devConfig)