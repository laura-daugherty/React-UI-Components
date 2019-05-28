import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="CardContent">
            <h2>
                Get started with React
            </h2>
            <p>
                React makes it painless to crete interactive UIs. Design simple views for each state in your application.
            </p>
            <a href="reactjs.org">reactjs.org</a> 
        </div>
    );
};

export default CardContent;