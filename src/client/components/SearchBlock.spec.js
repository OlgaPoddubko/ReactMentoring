import React from 'react';
import SearchBlock from './SearchBlock';

describe('render SearchBlock', () => {
  it('should render SearchBlock', () => {
    const wrapper = shallow(<SearchBlock />);
    expect(wrapper).toMatchSnapshot();
  });
});
