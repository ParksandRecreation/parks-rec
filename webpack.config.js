const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   resolve: {
      //     extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      //   },
      //   use: 'ts-loader',
      // },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
         loader: 'babel-loader',
         options: {
             presets: [
                 '@babel/preset-env',
                 '@babel/preset-react',
                 '@babel/preset-typescript'
             ]
         }
        }
     },
     {
       test: /\.(ts|tsx)$/,
       exclude: /node_modules/,
       use: ['ts-loader'],
     },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
