import React, {PropTypes} from 'react'
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
Home.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
}

export default Home
