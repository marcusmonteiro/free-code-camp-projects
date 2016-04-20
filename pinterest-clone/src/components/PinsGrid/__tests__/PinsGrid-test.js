import test from 'tape'
import PinsGrid from '../PinsGrid'
import React from 'react'
import {shallow} from 'enzyme'

let pinsData = [
  {
    'title': 'castle',
    'image_link': 'https://images.unsplash.com/photo-1458107768117-48f4877a125a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8bd6ed00af2d85d9f4c057421c28b5a1',
    'author': 'Marcus Monteiro',
    'profile_pic_link': 'https://avatars.githubusercontent.com/u/5924157?v=3'
  },
  {
    'title': 'building',
    'image_link': 'https://images.unsplash.com/photo-1458127059791-c4e6a3c10fa6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=b093948d37f493c68637c803610a7c2e',
    'author': 'Marcus Monteiro',
    'profile_pic_link': null
  },
  {
    'title': 'Venice',
    'image_link': 'https://images.unsplash.com/photo-1458228889997-849f20121af9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8a1cefd42d7c1d0c7a9d60442a5ab840',
    'author': 'Marcus Monteiro',
    'profile_pic_link': 'https://avatars.githubusercontent.com/u/5924157?v=3'
  }
]

const wrapper = shallow(<PinsGrid pinsData={pinsData} />)

test('PinsGrid', (assert) => {
  test('renders as many pins as there are elements in the pinsData array', (assert) => {
    assert.equal(wrapper.find('GridTile').length, pinsData.length)
    assert.end()
  })

  test('if profile_pic_link is not null, it renders it as an Image', (assert) => {
    let count = 0
    wrapper.find('GridTile').map((node, index) => {
      const gridTileSubtitlePropsImagePosition = node.props().subtitle.props.children[1]

      if (!(gridTileSubtitlePropsImagePosition)) {
        return
      }

      const isProfilePicRenderingOk =
        gridTileSubtitlePropsImagePosition.type.displayName === 'Image' &&
        gridTileSubtitlePropsImagePosition.props.src === pinsData[index].profile_pic_link

      if (isProfilePicRenderingOk) {
        count += 1
      }
    })
    assert.equal(count, 2)
    assert.end()
  })

  assert.end()
})
