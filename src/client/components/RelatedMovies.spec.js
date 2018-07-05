import React from 'react';
import { RelatedMovies } from './RelatedMovies';
import moviesArr from '../../../test/moviesArr';

describe('render RelatedMovies', () => {
  it('should render RelatedMovies', () => {
    const wrapper = shallow(<RelatedMovies relatedMovies = { moviesArr.data } />);
    expect(wrapper).toMatchSnapshot();
  });
});
