import express from 'express'
import { PORT } from '../config'

const server = express()

server.get('/', (req, res) => {
  res.send('Hello, World!')
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
