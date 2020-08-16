/**
 * Image component to render image to be edited
 * @property src path to an image
 * @property reference - reference will be set to an image element to deal with it
 */
import React from 'react';
import './Image.css';

export class Image extends React.Component {
    constructor(props) {
        super(props)

        this.props = props
    }
    render () {
        return <img
                alt="to edit"
                ref={this.props.reference}
                src={this.props.src}
                className="Image"
                width={255}
                height={255}
            />
    }

}
export default Image;
