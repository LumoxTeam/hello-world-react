const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const plugins = [
  new ExtractTextPlugin("css/[name].css")
]

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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            }
          ]
        })
      }
    ]
  },
  plugins
}