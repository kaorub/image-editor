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

        this.toggleIsCreated = () => {
            this.setState( { ...this.state, textEntered: !this.state.textEntered })
        }

        this.handleInput = (event) => {
            this.setState({ ...this.state, text: event.target.value })
        }
    }

    componentDidMount() {
        console.log('text box added')
    }

    render () {
        return (
            <div className="TextBox">
                {!this.state.textEntered &&
                <input type="text" onBlur={this.toggleIsCreated} onChange={this.handleInput}/>}
                {this.state.textEntered && this.state.text}
            </div>
        )
    }
}
export default TextBox;
