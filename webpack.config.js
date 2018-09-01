const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    mainPage: './js/app.js',
    detailPage: './js/detail.js'
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, './')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './html/index.html',
      excludeChunks: ['detailPage']
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: './html/detail.html',
      excludeChunks: ['mainPage']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: './assets/images/',
          outputPath: './',
          name: '[name].[ext]?[hash]'
        }
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
            publicPath: './',
            limit: 10000
          }
        }
      },
    ]
  },
  devtool: 'source-map',
  mode: 'development', // 릴리즈시 production으로 변경
  devServer: {
    contentBase: './'
  }
};
