const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',

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
