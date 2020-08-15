/**
 * Button component to render button
 * @property name unique name of button
 * @property value
 * @property label - displayed name
 */
import React from 'react';
import './Button.css';

function Button(props) {
  return <div>
    <button name={props.name} value={props.value} className="Button">
      {props.label}
    </button>
  </div>
}
export default Button;
