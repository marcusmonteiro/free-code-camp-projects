import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Timestamp Microservice project from FreeCodeCamp</h1>
        <h2>Example usage:</h2>
        <p>https://timestamp-ms.herokuapp.com/api/December 15, 2015</p>
        <p>https://timestamp-ms.herokuapp.com/api/1450137600</p>
        <h2>Example output:</h2>
        <p>{'{ "unix": 1450137600, "natural": "December 15, 2015" }'}</p>
      </div>
    )
  }
}

export default Home
