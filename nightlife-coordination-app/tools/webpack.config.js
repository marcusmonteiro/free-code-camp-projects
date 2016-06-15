import path from 'path'
import extend from 'extend'
import nodeExternals from 'webpack-node-externals'

const PATHS = {
  src: path.resolve(__dirname, '..', 'src')
}

const config = {
  context: PATHS.src,

  output: {
    path: path.resolve(__dirname, '..', 'build', 'public', 'assets'),
    publicPath: '/assets/'
  }

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.src,
        presets: [
          'node5',
          'stage-0',
          'react'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}

const clientConfig = extend(true, {}, config, {
  entry: path.resolve('.', 'client.js'),

  output: {
    filename: 'client.js'
  },

  target: 'web'
})

const serverConfig = extend(true, {}, config, {
  entry: path.resolve('.', 'server.js'),

  output: {
    filename: path.resolve('..', '..', 'server.js')
  }

  externals: [
    nodeExternals()
  ]
})

export default [clientConfig, serverConfig]
