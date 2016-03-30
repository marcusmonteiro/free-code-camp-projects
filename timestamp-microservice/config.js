import path from 'path'

const PORT = process.env.PORT || 3000

const PATHS = {
  server: path.join(__dirname, 'app', 'server.js'),
  dist: path.join(__dirname, 'dist'),
  nodeModules: path.join(__dirname, 'node_modules')
}

const PRODUCTION = process.env.NODE_ENV === 'production'

export { PORT, PATHS, PRODUCTION }
