import React from 'react';
import Button from './components/Button.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body App-row">
          <div className="App-img-wrapper App-column">
            Here will be an image
          </div>
          <div className="App-divider"></div>
          <div className="App-actions-wrapper App-column">
              <Button name="new-test-block" value="new-test-block" label="new text block"/>
              <Button name="zoom-in" value="zoom-in" label="zoom in"/>
              <Button name="zoom-out" value="zoom-out" label="zoom out"/>
              <Button name="rotate" value="rotate" label="rotate"/>
          </div>
      </div>
    </div>
  );
}

export default App;
