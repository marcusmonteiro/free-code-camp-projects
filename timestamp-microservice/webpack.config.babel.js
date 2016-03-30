import nodeExternals from 'webpack-node-externals'
import { __PATHS__ } from './config'

const serverConfig = {
  target: 'node',
  externals: [
    nodeExternals()
  ],

  entry: __PATHS__.server,

  output: {
    path: __PATHS__.dist,
    filename: 'server.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-0'],
        exclude: __PATHS__.node_modules
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}

export default [serverConfig]
