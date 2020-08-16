import React from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import TextBox from "./components/TextBox/TextBox";
import Image from "./components/Image/Image";
import * as constants from "./common/constants/constants";

class App extends React.Component {
    constructor(props) {
        super(props);

        /**
         * State contains flag if addTextBtn clicked
         * to conditional rendering the text box
         * @type {{isAddTextClicked: boolean}}
         */
        this.state = { isAddTextClicked: false }

        /**
         * Start value for an angle image was rotated for
         * @type {number}
         */
        this.currentAngle = 0

        /**
         * Addition text box to an image
         */
        this.addText = () => {
            this.setState({ ...this.state, isAddTextClicked: true })
        }

        /**
         * Zoom in with constant ratio
         */
        this.zoomIn = () => {
            this.imageRef.width = ++this.imageRef.width * constants.ZOOM_RATIO
            this.imageRef.height = ++this.imageRef.height * constants.ZOOM_RATIO
        }

        /**
         * Zoom out with constant value
         */
        this.zoomOut = () => {
            this.imageRef.width = ++this.imageRef.width / constants.ZOOM_RATIO
            this.imageRef.height = ++this.imageRef.height / constants.ZOOM_RATIO
        }

        /**
         * Rotate with constant value
         */
        this.rotate = () => {
            this.currentAngle += constants.ROTATE_ANGLE
            this.imageRef.style.transform = `rotate(${this.currentAngle}deg)` /* Equal to rotateZ(45deg) */
        }

        this.imageRef = null
        this.isAddTextClicked = true

        this.setImageRef = element => {
            this.imageRef = element;
        };
    }

    componentDidMount () {
        // if (this.imageRef) {
        //     this.cropper = utils.getCropper(this.imageRef)
        // }
    }

    componentWillUnmount() {
        /**
         * Set imageRef empty on desstroy
         * @type {null}
         */
        this.imageRef = null
    }

    render () {
        return (
            <div className="App">
                <div className="App-body App-row">
                    <div className="App-img-wrapper App-column">
                        <Image
                            reference={this.setImageRef}
                            src="./images/sanfran.jpeg"
                        />
                        {this.state.isAddTextClicked &&
                        <TextBox/>
                        }
                    </div>
                    <div className="App-divider">{constants.ZERO_WIDTH_SPACE_SYMBOL}</div>
                    <div className="App-actions-wrapper App-column">
                        <Button name="new-test-block" value="new-test-block" label="new text block" onClick={this.addText}/>
                        <Button name="zoom-in" value="zoom-in" label="zoom in" onClick={this.zoomIn}/>
                        <Button name="zoom-out" value="zoom-out" label="zoom out" onClick={this.zoomOut}/>
                        <Button name="rotate" value="rotate" label="rotate" onClick={this.rotate}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
