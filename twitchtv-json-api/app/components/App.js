import React from 'react'
import $ from 'jquery'

const USERS = [
  'freecodecamp', 'robtheswan', 'peakeleven', 'berlinervorwahl',
  'squallexe', 'worldseriesofpoker2015', 'food',
  'brunofin', 'comster404'
]

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      onlineStreams: [],
      offlineStreams: [],
      unavailabeStreams: []
    }
  }

  componentDidMount () {
    const JSONPSuffix = '?callback=?'

    USERS.map((user) => {
      const streamsAPIUrl = 'https://api.twitch.tv/kraken/streams/' + user + JSONPSuffix
      $.getJSON(streamsAPIUrl)
      .done((data) => {
        if (data.error) {
          this.setState({
            unavailabeStreams: this.state.unavailabeStreams.concat([{
              user: user,
              description: data.message
            }])
          })
        } else {
          if (data.stream) {
            this.setState({
              onlineStreams: this.state.onlineStreams.concat([{
                user: user,
                description: data.stream.channel.name,
                link: data.stream.channel.url
              }])
            })
          } else {
            this.setState({
              offlineStreams: this.state.offlineStreams.concat([{
                user: user,
                description: 'offline'
              }])
            })
          }
        }
      })
      .fail((err) => {
        console.error(err)
      })
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        Hello, World!
      </div>
    )
  }
}

export default App
