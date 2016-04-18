import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './ImagesGrid.scss'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'
import IconButton from 'material-ui/lib/icon-button'

function ImagesGrid ({imagesData}) {
  return (
    <div style={s.root}>
      <GridList
        cellHeight={200}
        // style={s.gridList}
      >
        {imagesData.map((image) => (
          <GridTile
            key={image.link}
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
