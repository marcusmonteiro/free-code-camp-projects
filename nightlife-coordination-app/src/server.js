import express from 'express'
import {renderToString} from 'react-dom/server'
import Html from './components/Html/Html'
import App from './components/App/App'

const server = express()

server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200
    const data = {
      title: 'Nightlife coordination app',
      component: <App />,
      siteID: 'UA-XXXX'
    }
    const html = renderToString(<Html {...data} />)
    res.status(statusCode)
    res.send(`!doctype html ${html}`)
  } catch (err) {
    next(err)
  }
})

const port = 3000
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`)
})
