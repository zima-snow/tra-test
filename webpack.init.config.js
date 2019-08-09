const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = options => {
  return {
    devServer: options.devServer,

    entry: ['./src/index'],

    output: {
      path: `${__dirname}/dist`,
      filename: 'js/bundle.js',
    },

    externals: {},

    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.jsx?$/,
              loader: ['babel-loader'],
              exclude: [/node_modules/],
            },
            {
              test: /\.(less)$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'less-loader',
                },
              ],
            },
          ],
        },
      ],
    },

    watch: options.watch,
    watchOptions: {
      aggregateTimeout: 300,
    },

    devtool: options.devtool,

    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
    },

    resolveLoader: {
      modules: ['node_modules'],
      moduleExtensions: ['-loader'],
      extensions: ['.js'],
    },

    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new MiniCssExtractPlugin({
        filename:
          process.env.NODE_ENV !== 'production'
            ? '[name].[hash:8].css'
            : '[name].[contenthash].css',
        chunkFilename:
          process.env.NODE_ENV !== 'production'
            ? '[name].[hash:8].css'
            : '[name].[contenthash].css',
      }),
      new HtmlPlugin({
        title: 'TRA-Test',
        template: path.resolve(process.cwd(), 'index.html'),
        filename: 'index.html',
      }),
    ],

    stats: {
      children: false,
      modules: false,
    },
  };
};
