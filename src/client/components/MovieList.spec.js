import React from 'react';
import { MovieList } from './MovieList';

describe('render MovieList', () => {
  it('should render MovieList', () => {
    const wrapper = shallow(<MovieList />);
    expect(wrapper).toMatchSnapshot();
  });
});
