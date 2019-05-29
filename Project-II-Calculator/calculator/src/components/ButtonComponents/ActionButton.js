import React from 'react';
import './Button.css';

const ActionButton = props => {
    console.log(props)
    return (
        <div className="ActionButton">{props.butt}</div>
    )
}

export default ActionButton;

