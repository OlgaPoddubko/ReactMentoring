import React from 'react';
import ResultsSort from './ResultsSort';

describe('render ResultsSort', () => {
  it('should render ResultsSort', () => {
    const wrapper = shallow(<ResultsSort />);
    expect(wrapper).toMatchSnapshot();
  });
});
