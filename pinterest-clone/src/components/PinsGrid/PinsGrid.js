import React, {PropTypes} from 'react'
import s from './styles'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'
import IconButton from 'material-ui/lib/icon-button'
import {Image} from 'react-bootstrap'
import {randomInt} from '../../utils/utils'

function PinsGrid ({pinsData, maxTileWidth = 1, maxTileHeight = 1}) {
  return (
    <div style={s.root}>
      <GridList
        style={s.gridList}
        cols={4}
        padding={8}
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
            cols={randomInt(1, maxTileWidth)}
            rows={randomInt(1, maxTileHeight)}
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
    author: PropTypes.string.isRequired,
    profile_pic_link: PropTypes.string
  })).isRequired,
  maxTileWidth: PropTypes.number,
  maxTileHeight: PropTypes.number
}

export default PinsGrid
