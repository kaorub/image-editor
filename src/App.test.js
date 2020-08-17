import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import {mount} from "enzyme";

test('snapshot renders', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('checks App contains one image to process and two as small clickable icons on footer', () => {
  const app = mount(<App />);
  expect(app.find('.Image').length).toEqual(3);
});

it('checks App contains buttons', () => {
  const app = mount(<App />);
  expect(app.find('.Button').length).toEqual(4);
});

it('checks App doesn\'t contain textbox on mount', () => {
  const app = mount(<App />);
  expect(app.find('.Textbox').length).toEqual(0);
});
