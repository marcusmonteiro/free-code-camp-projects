import path from 'path'

const __PORT__ = process.env.PORT || 3000

const __PATHS__ = {
  server: path.join(__dirname, 'app', 'server.js'),
  dist: path.join(__dirname, 'dist'),
  nodeModules: path.join(__dirname, 'node_modules')
}

const __PRODUCTION__ = process.env.NODE_ENV === 'production'
const __DEV__ = !__PRODUCTION__

export { __PORT__, __PATHS__, __PRODUCTION__, __DEV__ }
