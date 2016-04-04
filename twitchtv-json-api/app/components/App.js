import React from 'react'
import $ from 'jquery'
import {
  PageHeader, Panel, ListGroup, ListGroupItem, Grid, Row, Col
} from 'react-bootstrap'

const USERS = [
  'freecodecamp', 'robtheswan', 'peakeleven', 'berlinervorwahl',
  'squallexe', 'worldseriesofpoker2015', 'food',
  'brunofin', 'comster404'
]

const MyPageHeader = (
  <PageHeader><i className='fa fa-twitch'></i><a href='https://www.twitch.tv'> Twitch.tv</a> JSON API project from <a href='https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api'>FreeCodeCamp</a>
    <br />
    <small>Camper: <a href='https://www.freecodecamp.com/marcusmonteiro'>Marcus Vinicius Monteiro</a></small>
    <br />
    <small>Code at: <a href='https://github.com/marcusmonteiro/free-code-camp-projects/tree/master/twitchtv-json-api'>Github</a></small>
  </PageHeader>
)

function StreamListGroupItem ({user, description, link}) {
  let c = <Col xs={6} md={6}>{user}</Col>
  if (link) {
    c = <Col xs={6} md={6}><a href={link} target='_blank'>{user}</a></Col>
  }
  return (
    <ListGroupItem>
      <Grid>
        <Row>
          {c}
          <Col xs={6} md={6}>{description}</Col>
        </Row>
      </Grid>
    </ListGroupItem>
  )
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      onlineStreams: [],
      offlineStreams: [],
      unavailableStreams: []
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
            unavailableStreams: this.state.unavailableStreams.concat([{
              user: user,
              description: data.message
            }])
          })
        } else {
          if (data.stream) {
            this.setState({
              onlineStreams: this.state.onlineStreams.concat([{
                user: data.stream.channel.display_name,
                description: data.stream.channel.status,
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
    const onlineStreamsPanel = (
      <Panel header='Online streams' bsStyle='success'>
        <ListGroup fill>
          {this.state.onlineStreams.map((onlineStream, index) => {
            return (
              <StreamListGroupItem
                user={onlineStream.user}
                description={onlineStream.description}
                link={onlineStream.link}
                key={index}
              />
            )
          })}
        </ListGroup>
      </Panel>
    )
    const offlineStreamsPanel = (
      <Panel header='Offline streams' bsStyle='warning'>
        <ListGroup fill>
          {this.state.offlineStreams.map((offlineStream, index) => {
            return (
              <StreamListGroupItem
                user={offlineStream.user}
                description={offlineStream.description}
                link={offlineStream.link}
                key={index}
              />
            )
          })}
        </ListGroup>
      </Panel>
    )
    const unavailableStreamsPanel = (
      <Panel header='Unavailable streams' bsStyle='danger'>
        <ListGroup fill>
          {this.state.unavailableStreams.map((unavailableStream, index) => {
            return (
              <StreamListGroupItem
                user={unavailableStream.user}
                description={unavailableStream.description}
                link={unavailableStream.link}
                key={index}
              />
            )
          })}
        </ListGroup>
      </Panel>
    )
    return (
      <div>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />
        {MyPageHeader}
        {onlineStreamsPanel}
        {offlineStreamsPanel}
        {unavailableStreamsPanel}
      </div>
    )
  }
}

export default App
