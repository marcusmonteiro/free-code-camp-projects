import React, {PropTypes} from 'react'
import s from './styles'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'
import IconButton from 'material-ui/lib/icon-button'
import {Image} from 'react-bootstrap'

function PinsGrid ({pinsData}) {
  return (
    <div style={s.root}>
      <GridList
        style={s.gridList}
        cols={4}
      >
        {pinsData.map((pin) => (
          <GridTile
            key={pin.image_link}
            title={pin.title}
            subtitle={<span>by {
              pin.profile_pic_link
              ? <Image style={s.profilePic}src={pin.profile_pic_link} circle responsive /> : null
            }<b>{pin.author}</b></span>
            }
            actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
          >
            <img src={pin.image_link} />
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

PinsGrid.propTypes = {
  pinsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
}

export default PinsGrid
