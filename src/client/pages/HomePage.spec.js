import React from 'react';
import HomePage from './HomePage';

describe('render HomePage', () => {
  it('should render HomePage', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
