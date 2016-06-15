import webpack from 'webpack'
import webpackConfig from './webpack.config'

/**
 * Creates application bundles from the source files.
 */
function bundle () {
  const bundler = webpack(webpackConfig)
  bundler.run((err, stats) => {
    if (err) {
      throw err
    }
    console.log(stats.toString(webpackConfig.stats))
  })
}

export default bundle
