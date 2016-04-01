import express from 'express'
import { __PORT__, __PRODUCTION__ } from '../config'
import { timestampMicroservice } from './api'
import PrettyError from 'pretty-error'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './components/pages/Home'

const server = express()

server.get('/api/:unixTimestampOrNaturalLanguageDate', (req, res) => {
  const d = req.params.unixTimestampOrNaturalLanguageDate
  const r = timestampMicroservice(d)
  res.json(r)
})

server.use('*', handleRender)

function handleRender (req, res) {
  const html = renderToString(<Home />)
  res.send(renderFullPage(html))
}

function renderFullPage (html) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="description" content="Timestamp Microservice project from FreeCodeCamp">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Timestamp Microservice project from FreeCodeCamp</title>
      <meta name="msapplication-tap-highlight" content="no">
      <meta name="theme-color" content="#2F3BA2">
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
