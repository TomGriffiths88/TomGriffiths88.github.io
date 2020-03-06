import React from 'react';
import './Navbar.css';

const navbar = () => {

    
    return(
        <ul className="navbar">
            <li className="navbar__item"><a href="https://github.com/TomGriffiths88" className="navbar__link">Github</a></li>
            <li className="navbar__item"><a href="mailto:tom@tompatrick.dev" className="navbar__link">Email</a></li>
        </ul>
    )
}


export default navbar;