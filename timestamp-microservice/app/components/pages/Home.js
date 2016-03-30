import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Timestamp Microservice project from FreeCodeCamp</h1>
        <h2>User stories:</h2>
        <ol>
          <li>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</li>
          <li>If it does, it returns both the Unix timestamp and the natural language form of that date.</li>
          <li>If it does not contain a date or Unix timestamp, it returns null for those properties.</li>
        </ol>
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
