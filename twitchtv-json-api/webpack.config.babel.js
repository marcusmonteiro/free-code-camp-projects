import HtmlWebpackPlugin from 'html-webpack-plugin'
import { __PATHS__ } from './config'

const browserConfig = {

  entry: __PATHS__.app,

  output: {
    path: __PATHS__.dist,
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-0'],
        exclude: __PATHS__.node_modules
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',

      appMountId: 'app',
      mobile: true,

      title: 'Twitchtv JSON API project from FreeCodeCamp'
    })
  ]
}

export default [browserConfig]
