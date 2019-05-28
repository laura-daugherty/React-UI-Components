import React from 'react';
import './Button.css';


// const ActionButton = () => {
//     return(
//         <div className="ActionButton">
//             {ActionButts.map(butts => {
//                 return <div>{butts.butt}</div>
//             })}
//         </div>
//     )
// };

const ActionButton = props => {
    console.log(props)
    return (
        <div className="ActionButton">{props.butt}</div>
    )
}

export default ActionButton;

