import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import renderer, { create } from 'react-test-renderer';

it('renders button component', () => {
  const btn = shallow(<Button />);
  expect(btn.find('.Button').length).toEqual(1);
  expect(btn.find('div').length).toEqual(1);
});

it('checks button props', () => {
  const btn = shallow(<Button label="test"/>);
  expect(btn.text()).toEqual("test");
});

it('checks button clicked event', () => {
  const fn = jest.fn();
  let tree = create(<Button onClick={fn} />);
  const button = tree.root.findByType('button');
  button.props.onClick()
  expect(fn.mock.calls.length).toBe(1);
});

it('compares button snapshot', () => {
  const fn = jest.fn();
  const component = renderer.create(
      <Button onClick={fn}/>,
  );
  let btn = component.toJSON();
  expect(btn).toMatchSnapshot();
});
