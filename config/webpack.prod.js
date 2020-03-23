const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const prodConfig = {
  mode: 'production',
  devtool: 'none',
};

module.exports = merge(baseConfig, prodConfig);