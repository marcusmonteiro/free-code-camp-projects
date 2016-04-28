import test from 'tape'
import PinsGrid from '../PinsGrid'
import React from 'react'
import {shallow} from 'enzyme'

let usersData = [
  {
    'name': 'Marcus Monteiro',
    'profile_pic_link': 'https://avatars.githubusercontent.com/u/5924157?v=3',
    'pins': [
      {
        'title': 'castle',
        'image_link': 'https://images.unsplash.com/photo-1458107768117-48f4877a125a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8bd6ed00af2d85d9f4c057421c28b5a1'
      },
      {
        'title': 'Venice',
        'image_link': 'https://images.unsplash.com/photo-1458228889997-849f20121af9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8a1cefd42d7c1d0c7a9d60442a5ab840'
      },
      {
        'title': 'Paris',
        'image_link': 'https://images.unsplash.com/43/2EsHHwmRswlLYnaG07Ew_paris-motionbug.com.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=457be6ec58aa43732fe56669e5b3c9d0'
      },
      {
        'title': 'London',
        'image_link': 'https://images.unsplash.com/photo-1456603719096-e977bdc92571?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d8af2ab503000ace28438717ab23907a'
      },
      {
        'title': 'alley',
        'image_link': 'https://images.unsplash.com/34/a1mV1egnQwOqxZZZvhVo_street.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ef7d293388b89d7a274c913ec05aea69'
      }
    ]
  },
  {
    'name': 'LOLKatz',
    'profile_pic_link': null,
    'pins': [
      {
        'title': 'Jeesuscat',
        'image_link': 'https://i.ytimg.com/vi/6HA2D3LsJQs/hqdefault.jpg'
      }
    ]
  }
]

test('PinsGrid', (assert) => {
  test('renders as many pins as there are elements in the pins arrays', (assert) => {
    const wrapper = shallow(<PinsGrid usersData={usersData} />)
    const numberOfPins = usersData[0].pins.length + usersData[1].pins.length
    assert.equal(wrapper.find('GridTile').length, numberOfPins)
    assert.end()
  })

  test('if profile_pic_link is not null, it renders it as an Image', (assert) => {
    const wrapper = shallow(<PinsGrid usersData={usersData} />)
    let profilePicCount = 0
    wrapper.find('GridTile').map((node, index) => {
      const gridTileSubtitlePropsImagePosition = node.props().subtitle.props.children[1]

      if (!(gridTileSubtitlePropsImagePosition)) {
        return
      }

      const isProfilePicRenderingOk =
        gridTileSubtitlePropsImagePosition.type.displayName === 'Image' &&
        gridTileSubtitlePropsImagePosition.props.src === usersData[0].profile_pic_link

      if (isProfilePicRenderingOk) {
        profilePicCount += 1
      }
    })
    assert.equal(profilePicCount, usersData[0].pins.length)
    assert.end()
  })

  test('max width and height of the grid tiles can be passed as arguments', (assert) => {
    let testOk = false
    while (!testOk) {
      const wrapper = shallow(<PinsGrid usersData={usersData} maxTileWidth={10} maxTileHeight={10} />)
      wrapper.find('GridTile').map((node, index) => {
        if (node.props().cols > 1 && node.props().rows > 1) {
          testOk = true
        }
      })
    }
    assert.end()
  })

  assert.end()
})
