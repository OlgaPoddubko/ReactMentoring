import React from 'react';
import NotFound from './NotFound';

describe('render NotFound', () => {
  it('should render NotFound', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
