import express from 'express'
import { port } from '../config'

const server = express()

server.get('/', (req, res) => {
  res.send('Hello, World!')
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
