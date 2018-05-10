import React from 'react';
import MoviePage from './MoviePage';

describe('render MoviePage', () => {
  it('should render MoviePage', () => {
    const wrapper = shallow(<MoviePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
