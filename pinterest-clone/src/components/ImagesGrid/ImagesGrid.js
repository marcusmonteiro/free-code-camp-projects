import React, {PropTypes} from 'react'
import s from './styles'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'
import IconButton from 'material-ui/lib/icon-button'

function ImagesGrid ({imagesData}) {
  return (
    <div style={s.root}>
      <GridList
        style={s.gridList}
        cols={4}
      >
        {imagesData.map((image, index) => (
          <GridTile
            key={index}
            title={image.title}
            subtitle={<span>by <b>{image.author}</b></span>}
            actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
          >
            <img src={image.link} />
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

ImagesGrid.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
}

export default ImagesGrid
