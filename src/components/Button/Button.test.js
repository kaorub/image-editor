import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders button component', () => {
  const app = shallow(<Button />);
  expect(app.find('.Button').length).toEqual(1);
});
