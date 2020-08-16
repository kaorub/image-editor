import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

it('renders image component', () => {
    const image = shallow(<Image reference={null}/>);
    expect(image.find('.Image').length).toEqual(1);
});
