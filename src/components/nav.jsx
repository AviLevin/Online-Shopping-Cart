import React, { Component } from 'react';


const Nav = ({totalCounters}) => {
    return (<nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar
         <span className="badge badge-secondary" >{totalCounters}</span></a>
    </nav>);
}

export default Nav;

