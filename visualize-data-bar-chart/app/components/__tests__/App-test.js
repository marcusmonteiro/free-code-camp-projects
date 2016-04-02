import test from 'tape'
import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

test('App component test', (assert) => {
  const wrapper = shallow(<App />)
  console.log(wrapper)
  assert.end()
})
