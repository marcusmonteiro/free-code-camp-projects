import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home.scss'
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid'

const title = 'Pinterest Clone'

function Home ({imagesData}, context) {
  context.setTitle(title)
  return (
    <div>
      <ImagesGrid imagesData={imagesData} />
    </div>
  )
}

Home.contextTypes = {setTitle: PropTypes.func.isRequired}

export default Home
