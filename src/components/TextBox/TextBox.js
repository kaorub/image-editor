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

        this.state = { text: '', textEntered: false }

        /**
         * Set textEntered to conditionally show the div element with text
         */
        this.handleBlur = () => {
            this.setState( { ...this.state, textEntered: true })
        }

        /**
         * Set text value to be shown in div element
         * @param event
         */
        this.handleChange = (event) => {
            this.setState({ ...this.state, text: event.target.value })
        }
    }

    render () {
        return (
            <div className="TextBox">
                {!this.state.textEntered &&
                <input type="text" onBlur={this.handleBlur} onChange={this.handleChange}/>}
                {this.state.textEntered && this.state.text}
            </div>
        )
    }
}
export default TextBox;
