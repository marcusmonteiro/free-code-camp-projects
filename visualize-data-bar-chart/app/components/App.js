import React from 'react'
import d3 from 'd3'
import c3 from 'c3'

class App extends React.Component {
  componentDidMount () {
    d3.json('./GDP-data.json', (error, json) => {
      if (error) {
        console.error(error)
      }

      const dataset = json.data

      const quarters = dataset.map((year) => {
        return year[0]
      })
      console.log(quarters)

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
      <div id='chart' />
    )
  }
}

export default App
