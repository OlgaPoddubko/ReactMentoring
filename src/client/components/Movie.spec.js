import React from 'react';
import Movie from './Movie';

describe('render Movie', () => {
  it('should render Movie', () => {
    const wrapper = shallow(<Movie />);
    expect(wrapper).toMatchSnapshot();
  });
});
