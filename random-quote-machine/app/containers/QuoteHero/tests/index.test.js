import { QuoteHero } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<QuoteHero />', () => {
  it('should render a FlatButton', () => {
    const renderedComponent = shallow(
      <QuoteHero
        loading
      />);

    expect(renderedComponent.find('FlatButton').length).toEqual(1);
  });
});
