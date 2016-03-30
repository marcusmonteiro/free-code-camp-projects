import rmdir from 'rmdir'
import { PATHS } from './config'

rmdir(PATHS.dist, (err, dirs, files) => {
  if (err && err.code !== 'ENOENT') {
    throw err
  }
  console.log(PATHS.dist + ' directory removed')
})

