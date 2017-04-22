const webpack = require("webpack");
const path = require("path");

const DEV = path.resolve(__dirname+"/app");
const OUTPUT = path.resolve(__dirname+"/public");

const config = {
  entry: DEV + "/App.js",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: 'public',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.sass?$/,
        loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};

module.exports = config;
