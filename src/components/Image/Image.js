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
        const style = { transform: this.props.transform }
        return <img
                style={style}
                alt="to edit"
                ref={this.props.reference}
                src={this.props.src}
                className="Image"
                width={this.props.width}
                height={this.props.height}
                onClick={this.props.onClick}
            />
    }

}
export default Image;
