import 'babel-polyfill'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import ReactDOM from 'react-dom/server'
import {match} from 'universal-router'
import PrettyError from 'pretty-error'
import routes from './routes'
import assets from './assets'
import {port, analytics} from './config'

const server = express()

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')))
server.use(cookieParser())
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let css = []
    let statusCode = 200
    const template = require('./views/index.jade')
    const data = {title: '', description: '', css: '', body: '', entry: assets.main.js}

    if (process.env.NODE_ENV === 'production') {
      data.trackingId = analytics.google.trackingId
    }

    await match(routes, {
      path: req.path,
      query: req.query,
      context: {
        insertCss: (styles) => css.push(styles._getCss()),
        setTitle: (value) => (data.title = value),
        setMeta: (key, value) => (data[key] = value)
      },
      render (component, status = 200) {
        css = []
        statusCode = status
        data.body = ReactDOM.renderToString(component)
        data.css = css.join('')
        return true
      }
    })

    res.status(statusCode)
    res.send(template(data))
  } catch (err) {
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)) // eslint-disable-line no-console
  const template = require('./views/error.jade')
  const statusCode = err.status || 500
  res.status(statusCode)
  res.send(template({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack
  }))
})

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`)
})
