import React from 'react'
import d3 from 'd3'
import c3 from 'c3'
import { PageHeader } from 'react-bootstrap'

const MyPageHeader = (
  <PageHeader><i className='fa fa-bar-chart'></i> Visualize Data with a Bar Chart project from <a href='https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart'>FreeCodeCamp</a>
    <br />
    <small>Camper: <a href='https://www.freecodecamp.com/marcusmonteiro'>Marcus Vinicius Monteiro</a></small>
    <br />
    <small>Code at: <a href='https://github.com/marcusmonteiro/free-code-camp-projects/tree/master/visualize-data-bar-chart'>Github</a></small>
  </PageHeader>
)

class App extends React.Component {
  componentDidMount () {
    d3.json('http://2am.ninja/json/gdp.json', (error, json) => {
      if (error) {
        console.error(error)
      }

      const dataset = json.data

      const quarters = dataset.map((year) => {
        return year[0]
      })

      const GDPs = dataset.map((year) => {
        return year[1]
      })

      const chart = c3.generate({
        bindto: '#chart',
        data: {
          x: 'x',
          columns: [
            ['x'].concat(quarters),
            ['Gross Domestic Product, USA'].concat(GDPs)
          ],
          type: 'bar'
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              fit: true,
              format: '%b %y'
            }
          },
          y: {
            label: {
              text: 'Gross Domestic Product, USA'
            },
            tick: {
              format: d3.format('$')
            }
          }
        }
      })
    })
  }

  render () {
    return (
      <div>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' />
        {MyPageHeader}
        <div id='chart' />
      </div>
    )
  }
}

export default App
