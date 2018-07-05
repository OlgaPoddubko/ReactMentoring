import React from 'react';
import NotFoundPage from './NotFoundPage';

describe('render NotFoundPage', () => {
  it('should render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
