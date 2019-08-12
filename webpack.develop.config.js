const fs = require('fs');

module.exports = require('./webpack.init.config')({
  buildMode: 'develop',
  devtool: 'source-map',
  debug: true,
  watch: true,
  devServer: {
    contentBase: fs.realpathSync(process.cwd()),
    publicPath: '',
    host: '127.0.0.1',
    port: 4000,
    compress: true,
    clientLogLevel: 'silent',
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      timings: true,
    },
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:3000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
});
