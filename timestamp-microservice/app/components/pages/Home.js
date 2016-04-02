import React from 'react'
import {
  PageHeader, Panel, ListGroup, ListGroupItem
} from 'react-bootstrap'

const MyPageHeader = (
  <PageHeader><i className='fa fa-clock-o'></i> Timestamp Microservice project from <a href='https://www.freecodecamp.com/challenges/timestamp-microservice'>FreeCodeCamp</a>
    <br />
    <small>Camper: <a href='https://www.freecodecamp.com/marcusmonteiro'>Marcus Vinicius Monteiro</a></small>
    <br />
    <small>Code at: <a href='https://github.com/marcusmonteiro/free-code-camp-projects/tree/master/timestamp-microservice'>Github</a></small>
  </PageHeader>
)

const UserStories = (
  <Panel header='User stories' bsStyle='info'>
    <ListGroup fill>
      <ListGroupItem>I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)</ListGroupItem>
      <ListGroupItem>If it does, it returns both the Unix timestamp and the natural language form of that date.</ListGroupItem>
      <ListGroupItem>If it does not contain a date or Unix timestamp, it returns null for those properties.</ListGroupItem>
    </ListGroup>
  </Panel>
)

const ExampleUsage = (
  <Panel header='Example usage' bsStyle='info'>
    <ListGroup fill>
      <ListGroupItem>https://enigmatic-retreat-16073.herokuapp.com/api/December 15, 2015</ListGroupItem>
      <ListGroupItem>https://enigmatic-retreat-16073.herokuapp.com/api/1450137600</ListGroupItem>
    </ListGroup>
  </Panel>
)

const ExampleOutput = (
  <Panel header='Example output' bsStyle='info'>
    <ListGroup fill>
      <ListGroupItem>{'{ "unix": 1450137600, "natural": "December 15, 2015" }'}</ListGroupItem>
    </ListGroup>
  </Panel>
)

class Home extends React.Component {
  render () {
    return (
      <div>
        {MyPageHeader}
        {UserStories}
        {ExampleUsage}
        {ExampleOutput}
      </div>
    )
  }
}

export default Home
