import React from 'react';
import { Movie } from './Movie';
import moviesArr from '../../../test/moviesArr';

describe('render Movie', () => {
  it('should render Movie', () => {
    const wrapper = shallow(<Movie movie={ moviesArr.data[0] }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
