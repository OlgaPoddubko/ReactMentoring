import React from 'react';
import { MovieInfo } from './MovieInfo';
import moviesArr from '../../../test/moviesArr';

describe('render MovieInfo', () => {
  it('should render MovieInfo', () => {
    const wrapper = shallow(<MovieInfo currentMovie = { moviesArr.data[0] }
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
