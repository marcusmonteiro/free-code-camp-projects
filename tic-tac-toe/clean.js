import rmdir from 'rmdir'
import { __PATHS__ } from './config'

rmdir(__PATHS__.dist, (err, dirs, files) => {
  if (err && err.code !== 'ENOENT') {
    throw err
  }
  console.log(__PATHS__.dist + ' directory removed')
})

