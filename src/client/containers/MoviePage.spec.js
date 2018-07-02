import React from 'react';
import { MoviePage } from './MoviePage';
import { fetchMovie, fetchRelatedMovies } from '../actions';
import moviesArr from '../../../test/moviesArr';

describe('render MoviePage', () => {
  it('should render MoviePage', () => {
    const wrapper = shallow(<MoviePage
      currentMovie = { moviesArr.data[0] }
      match = {{ params: { movieId: '637' } }}
      fetchMovie = { fetchMovie }
      fetchRelatedMovies = { fetchRelatedMovies }
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
