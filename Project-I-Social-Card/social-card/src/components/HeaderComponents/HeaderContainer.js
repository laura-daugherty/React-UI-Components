import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
    <div className="HeaderContainer">
        <div className="titleCont">
            <HeaderTitle  />
            <HeaderContent  />
        </div>
    </div>
    )
}


export default HeaderContainer;
