import path from 'path'
import nodeExternals from 'webpack-node-externals'

const PATHS = {
  server: path.join(__dirname, 'api', 'server.js'),
  dist: path.join(__dirname, 'dist'),
  nodeModules: path.join(__dirname, 'node_modules')
}

const serverConfig = {
  target: 'node',
  externals: [
    nodeExternals()
  ],

  entry: PATHS.server,

  output: {
    path: PATHS.dist,
    filename: 'server.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-0'],
        exclude: PATHS.node_modules
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}

export default [serverConfig]
