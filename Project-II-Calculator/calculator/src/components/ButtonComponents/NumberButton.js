import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={`NumberButton ${props.buttonStyle}`}>
            <div>
                {props.num}
            </div>
        </div>
    )
}

export default NumberButton;