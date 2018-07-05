import React from 'react';
import { SearchByButtons } from './SearchByButtons';

describe('render SearchByButtons', () => {
  it('should render SearchByButtons', () => {
    const wrapper = shallow(<SearchByButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
