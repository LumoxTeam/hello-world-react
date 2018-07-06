const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    "home": path.resolve(__dirname, 'src/entries/home.js'),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}