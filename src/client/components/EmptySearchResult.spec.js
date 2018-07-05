import React from 'react';
import EmptySearchResult from './EmptySearchResult';

describe('render EmptySearchResult', () => {
  it('should render EmptySearchResult', () => {
    const wrapper = shallow(<EmptySearchResult />);
    expect(wrapper).toMatchSnapshot();
  });
});
