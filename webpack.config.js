const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
  return {
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: '@angular-devkit/build-optimizer/webpack-loader',
          options: {
            sourceMap: false
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  }
}
