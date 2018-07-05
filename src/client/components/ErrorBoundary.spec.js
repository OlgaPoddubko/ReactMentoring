import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('render ErrorBoundary', () => {
  it('should render ErrorBoundary', () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper).toMatchSnapshot();
  });
});
