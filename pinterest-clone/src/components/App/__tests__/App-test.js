import test from 'tape'
import App from '../App'
import React from 'react'
import { shallow } from 'enzyme'

test('App', (assert) => {
  test('renders children correctly', (assert) => {
    const wrapper = shallow(
      <App context={{ insertCss: () => {} }}>
        <div className="child" />
      </App>
    )
    assert.true(wrapper.contains(<div className="child" />))
    assert.end()
  })
  assert.end()
})
