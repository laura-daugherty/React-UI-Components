import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={`NumberButton ${props.buttonStyle}`}>
            <btn>
                {props.num}
            </btn>
        </div>
    )
}

export default NumberButton;