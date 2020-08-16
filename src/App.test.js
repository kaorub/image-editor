import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('snapshot renders', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
