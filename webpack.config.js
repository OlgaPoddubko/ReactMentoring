const path = require('path');

const webpack = require("webpack");

module.exports = function(env, options) {
  const isProduction = options.mode === "production";

  const config = {
    entry: './src/client/index.jsx',
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none"  : "source-map",

    output: {
      filename: 'bundle.js',
      path: path.resolve('./public/js/')
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }, {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    },

    devServer: {
      contentBase: "./public/js/"
    }
  };

  return config;
};
