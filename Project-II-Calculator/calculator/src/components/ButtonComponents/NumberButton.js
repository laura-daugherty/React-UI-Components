import React from 'react';
import './Button.css';


// const NumButts = [
//     {num: 9},
//     {num: 8},
//     {num: 7},
//     {num: 6},
//     {num: 5},
//     {num: 4},
//     {num: 3},
//     {num: 2},
//     {num: 1},
// ]

// const NumberButton = () => {
//     return(
//     <div className="NumberButton">
//         {NumButts.map(nums => {
//             return <div className="num">{nums.num}</div>
//         })}
//     </div>
//     );
// };

// export default NumberButton;

const NumberButton = (props) => {
    return (
        <div className={`NumberButton ${props.buttonstyle}`}>
            <div>
                {props.num}
            </div>
        </div>
    )
}

export default NumberButton;