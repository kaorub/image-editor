/**
 * TextBox component to display text box over an image
 * @property name unique name of button
 * @property text
 */
import React from 'react';
import './TextBox.css';

class TextBox extends React.Component {
    constructor(props) {
        super(props)

        /**
         * Set textEntered to conditionally show the div element with text
         */
        this.handleBlur = () => {
            this.props.handleBlur()
        }

        /**
         * Set text value to be shown in div element
         * @param event
         */
        this.handleChange = (event) => {
            this.props.handleChange(event.target.value)
        }
    }

    render () {
        return (
            <div className="TextBox">
                {!this.props.textEntered &&
                <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}/>}
                {this.props.textEntered &&
                <span>{this.props.text}</span>}
            </div>
        )
    }
}
export default TextBox;
