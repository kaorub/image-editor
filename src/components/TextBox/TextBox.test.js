import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent } from '@testing-library/react'
import TextBox from './TextBox';

it('renders textbox component', () => {
    const textbox = shallow(<TextBox />);
    expect(textbox.find('.TextBox').length).toEqual(1);
});

it('checks textbox textEntered state before blur event', () => {
    const textbox = shallow(<TextBox />);
    expect(textbox.instance().state.textEntered).toBe(false);
});

it('checks textbox textEntered state after blur event', () => {
    const textbox = shallow(<TextBox />);
    textbox.find('input').simulate('blur');

    expect(textbox.instance().state.textEntered).toBe(true);
});

/**
 * Setup function to get rendered TextBox
 * @returns {any}
 */
const setup = () => {
    const utils = render(<TextBox />)
    const input = utils.getByText((content, element) => {
        return element.tagName.toLowerCase() === 'input'
    })
    return {
        input,
        ...utils,
    }
}

it('checks textbox text state on input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('23')
});
