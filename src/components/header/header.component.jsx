import React from 'react';
import "./header.style.scss";
import Logo from "../../assets/logo.jpg";

const Header = ({ msg, firstName, lastName, logo }) => {
    return ( 
        <header className="header">
            <div className="header__msg">
                <span>{`${firstName} ${lastName},`}</span>
                <span >{`${msg}.`}</span>
            </div>
            <div className="header__holder">
                <img className="header__logo" src={Logo} alt="logo" />
            </div>
        </header>
     );
}
 
export default Header;