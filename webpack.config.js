const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fileLoader = require('file-loader');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Darzi',
      template: './src/template/index.html'
    })],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          },
        ],
      }
    ],
  }
};