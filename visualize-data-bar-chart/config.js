import path from 'path'

const __PATHS__ = {
  app: path.join(__dirname, 'app', 'app.js'),
  dist: path.join(__dirname, 'dist'),
  data: path.join(__dirname, 'app', 'data'),
  nodeModules: path.join(__dirname, 'node_modules')
}

export { __PATHS__ }
