const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const Development = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: Development ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                Development && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    Development && new webpack.HotModuleReplacementPlugin(),
    Development && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};