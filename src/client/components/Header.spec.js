import React from 'react';
import Header from './Header';

describe('render Header', () => {
  it('should render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
