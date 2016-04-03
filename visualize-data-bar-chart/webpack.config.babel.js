import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { __PATHS__ } from './config'

const browserConfig = {

  entry: {
    vendor: ['d3', 'react'],
    app: __PATHS__.app
  },

  output: {
    path: __PATHS__.dist,
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-0', 'react'],
        exclude: __PATHS__.node_modules
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',

      appMountId: 'app',
      mobile: true,

      title: 'Visualize Data with a Bar Chart project from FreeCodeCamp'
    }),
    new CopyWebpackPlugin([
      { from: __PATHS__.data }
    ])
  ],

  devServer: {
    contentBase: __PATHS__.dist,

    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: 'errors-only'
  }
}

export default [browserConfig]
