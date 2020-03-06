import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';


const header = (props) => {

    return (
        <div className="header">
            <h1 className="header__logo">Tom Patrick</h1>   
            <span className="header__strap">Front-end Designer / Developer</span>
            <Navbar />
        </div>
    )
}


export default header;