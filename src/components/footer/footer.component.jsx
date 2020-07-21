import React from 'react'
import "./footer.style.scss";

const Footer = ({submitMsg}) => {
    return ( <footer className="footer">
        <button className="footer__submit btn">{submitMsg}</button>
    </footer> );
}
 
export default Footer;