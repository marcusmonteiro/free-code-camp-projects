import React, {PropTypes} from 'react'
import PinsGrid from '../../components/PinsGrid/PinsGrid'

const title = 'Pinterest Clone'

function Home ({pinsData}, context) {
  context.setTitle(title)
  return (
    <div>
      <PinsGrid pinsData={pinsData} />
    </div>
  )
}

Home.contextTypes = {setTitle: PropTypes.func.isRequired}
Home.propTypes = {
  pinsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    profile_pic_link: PropTypes.string
  })).isRequired
}

export default Home
