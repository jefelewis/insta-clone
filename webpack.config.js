const path = require('path');

module.exports = {
  entry: path.resolve('./client/public/index.js'),
  output: {
    path: path.resolve('./client/public/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}