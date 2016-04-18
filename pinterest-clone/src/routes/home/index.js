import React from 'react'
import Home from './Home'
import data from './test_data.json'

export default {

  path: '/',

  async action () {
    return <Home imagesData={data.images} />
  }
}
