import express from 'express'
import { __PORT__, __PRODUCTION__ } from '../config'
import { unixTimestampToNaturalLanguageDate } from './core'
import PrettyError from 'pretty-error'

const server = express()

server.get('/api/:unixTimestampOrNaturalLanguageDate', (req, res) => {
  const d = req.params.unixTimestampOrNaturalLanguageDate
  const r = unixTimestampToNaturalLanguageDate(d)
  res.json(r)
})

server.get('/', (req, res) => {
  res.send('Hello, World!')
})

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
