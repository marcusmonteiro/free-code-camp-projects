import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.scss'

const title = 'Pinterest Clone'

function Home (props, context) {
  context.setTitle(title)
  return (
    <div>
      Hello, World!
    </div>
  )
}

Home.contextTypes = {setTitle: PropTypes.func.isRequired}

export default withStyles(Home, s)
