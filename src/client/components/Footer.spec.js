import React from 'react';
import Footer from './Footer';

describe('render Footer', () => {
  it('should render Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
