import React from 'react';
import './Button.css';

const OpButts = [
    {op: "%"},
    {op: "x"},
    {op: "-"},
    {op: "+"},
    {op: "=" },
]

const OperatorButton = prop => {
    return(
    <div className="OperatorButton">
        {OpButts.map(ops => {
            return <div className="op">{ops.op}</div>
        })}
    </div>
    );
};

export default OperatorButton;

