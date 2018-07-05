import React from 'react';
import { ProposeByGenre } from './ProposeByGenre';
import moviesArr from '../../../test/moviesArr';

describe('render ProposeByGenre', () => {
  it('should render ProposeByGenre', () => {
    const wrapper = shallow(<ProposeByGenre currentMovie = { moviesArr.data[0] }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
