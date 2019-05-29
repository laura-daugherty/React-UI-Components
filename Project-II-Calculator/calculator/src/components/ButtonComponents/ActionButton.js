import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className={`ActionButton ${props.buttonStyle}`}>
            <btn>
                {props.char}
            </btn>
        </div>
    )
}

export default ActionButton;

// const NumberButton = (props) => {
//     return (
//         <div className={`NumberButton ${props.buttonstyle}`}>
//             <div>
//                 {props.num}
//             </div>
//         </div>
//     )
// }