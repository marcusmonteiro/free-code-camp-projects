import React, {PropTypes} from 'react'
import PinsGrid from '../../components/PinsGrid/PinsGrid'

const title = 'Pinterest Clone'

function Home ({usersData}, context) {
  context.setTitle(title)
  return (
    <div>
      <PinsGrid usersData={usersData} />
    </div>
  )
}

Home.contextTypes = {setTitle: PropTypes.func.isRequired}
Home.propTypes = {
  usersData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_pic_link: PropTypes.string,
    pins: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image_link: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
}

export default Home
