import express from 'express'
import { __PORT__, __PRODUCTION__ } from '../config'
import { unixTimestampToNaturalLanguageDateApi } from './api'
import PrettyError from 'pretty-error'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './components/pages/Home'

const server = express()

server.get('/api/:unixTimestampOrNaturalLanguageDate', (req, res) => {
  const d = req.params.unixTimestampOrNaturalLanguageDate
  const r = unixTimestampToNaturalLanguageDateApi(d)
  res.json({
    natural: r
  })
})

server.use('*', handleRender)

function handleRender (req, res) {
  const html = renderToString(<Home />)
  res.send(renderFullPage(html))
}

function renderFullPage (html) {
  return `
    <!doctype html>
    <html>
    <head>
      <title>Timestamp Microservice project from FreeCodeCamp</title>
    </head>
    <body>
      <div>${html}</div>
    </body>
    </html>
  `
}

// Error handling
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

server.use((err, req, res, next) => {
  console.error(pe.render(err))
  const statusCode = err.status || 500
  res.status(statusCode)
  __PRODUCTION__ ? res.send('') : res.send(err.stack)
})

server.listen(__PORT__, () => {
  console.log(`Server listening on port ${__PORT__}`)
})
