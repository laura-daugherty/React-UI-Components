import React from 'react';
import './Button.css';


const NumButts = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: 4},
    {num: 5},
    {num: 6},
    {num: 7},
    {num: 8},
    {num: 9},
]

const NumberButton = () => {
    return(
    <div className="NumberButton">
        {NumButts.map(nums => {
            return <div className="num">{nums.num}</div>
        })}
    </div>
    );
};

export default NumberButton;

