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
        this.state = {
            front: {
                currentAngle: 0,
                width: 0,
                height: 0,
                isAddTextClicked: false,
                text: '',
                textEntered: false,
                transform: 'none'
            },
            back: {
                currentAngle: 0,
                width: 0,
                height: 0,
                isAddTextClicked: false,
                text: '',
                textEntered: false,
                transform: 'none'
            },
            currentlyChosenType: 'front'
        }

        /**
         * Adds the text box to an image
         */
        this.addText = () => {
            const currentlyChosenType = this.state.currentlyChosenType
            this.setState({
                [currentlyChosenType]: {
                    ...this.state[currentlyChosenType],
                    isAddTextClicked: true
                }
            })
        }

        /**
         * Zooms with constant ratio via flag set as a parameter
         * @param flag ('greater', 'less)
         */
        this.zoom = (flag) => {
            let aspectRatio = 1
            if (flag === 'greater') aspectRatio = constants.ZOOM_RATIO
            else if (flag === 'less') aspectRatio = 1 / constants.ZOOM_RATIO
            const currentlyChosenType = this.state.currentlyChosenType
            const newWidth = ++this.state[currentlyChosenType].width * aspectRatio
            const newHeight = ++this.state[currentlyChosenType].height * aspectRatio
            this.setState({
                [currentlyChosenType]: {
                    ...this.state[currentlyChosenType],
                    width: newWidth,
                    height: newHeight
                }
            })
        }

        /**
         * Rotate with constant value
         */
        this.rotate = () => {
            const { currentlyChosenType } = this.state
            const state = this.state[currentlyChosenType]
            const newAngle = state.currentAngle + constants.ROTATE_ANGLE
            const newTransform = `rotate(${newAngle}deg)`
            this.setState({
                [currentlyChosenType]: {
                    ...this.state[currentlyChosenType],
                    currentAngle: newAngle,
                    transform: newTransform
                }
            })
        }

        this.imageRef = null

        /**
         * Set image ref in callback
         * @param element
         */
        this.setImageRef = element => {
            this.imageRef = element;
        };

        /**
         * Sets up current image type to deal with
         * @param type
         */
        this.handleClickMiniImg = (type) => {
            this.setState({
                ...this.state,
                currentlyChosenType: type
            })
        }

        /**
         * Sets up text in textbox of corresponding img
         * @param text
         */
        this.setComponentText = (text) => {
            const { currentlyChosenType } = this.state
            this.setState({
                [currentlyChosenType]: {
                    ...this.state[currentlyChosenType],
                    text: text
                }
            })
        }

        /**
         * Sets up text entered to true on blur
         */
        this.setTextEntered = () => {
            const { currentlyChosenType } = this.state
            this.setState({
                [currentlyChosenType]: {
                    ...this.state[currentlyChosenType],
                    textEntered: true
                }
            })
        }
    }

    /**
     * Sets up initial image size
     */
    componentDidMount() {
        this.setState({
            front: {
                ...this.state.front,
                width: constants.INITIAL_WIDTH,
                height: constants.INITIAL_HEIGHT
            },
            back: {
                ...this.state.back,
                width: constants.INITIAL_WIDTH,
                height: constants.INITIAL_HEIGHT
            }
        })
    }

    componentWillUnmount() {
        /**
         * Set imageRef empty on desstroy
         * @type {null}
         */
        this.imageRef = null
    }

    render () {
        const { currentlyChosenType } = this.state
        const state = this.state[currentlyChosenType]
        const frontState = this.state.front
        const backState = this.state.back
        return (
            <div className="App">
                <div className="App-body App-row">
                    <div className="App-img-wrapper App-column">
                        <Image
                            reference={this.setImageRef}
                            width={state.width}
                            height={state.height}
                            transform={state.transform}
                            src="./images/sanfran.jpeg"
                        />
                        {state.isAddTextClicked &&
                        <TextBox
                            handleChange={this.setComponentText}
                            handleBlur={this.setTextEntered}
                            text={state.text}
                            textEntered={state.textEntered}
                        />
                        }
                        <div className="App-footer App-row">
                            <Image
                                width={constants.INITIAL_MINI_SIZE}
                                height={constants.INITIAL_MINI_SIZE}
                                transform={frontState.transform}
                                src="./images/sanfran.jpeg"
                                onClick={() => this.handleClickMiniImg('front')}
                            />
                            <Image
                                width={constants.INITIAL_MINI_SIZE}
                                height={constants.INITIAL_MINI_SIZE}
                                transform={backState.transform}
                                src="./images/sanfran.jpeg"
                                onClick={() => this.handleClickMiniImg('back')}
                            />
                        </div>
                    </div>
                    <div className="App-divider">{constants.ZERO_WIDTH_SPACE_SYMBOL}</div>
                    <div className="App-actions-wrapper App-column">
                        <Button name="new-test-block" value="new-test-block" label="new text block" onClick={this.addText}/>
                        <Button name="zoom-in" value="zoom-in" label="zoom in" onClick={() => this.zoom('greater')}/>
                        <Button name="zoom-out" value="zoom-out" label="zoom out" onClick={() => this.zoom('less')}/>
                        <Button name="rotate" value="rotate" label="rotate" onClick={this.rotate}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
