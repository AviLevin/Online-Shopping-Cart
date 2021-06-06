import React, { Component } from 'react';


const Nav = ({totalCounters}) => {
    return (<nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar
        &nbsp;
        </a>
        
      {/* <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link primary" href="#">Home {totalCounters} <span className="sr-only">(current)</span></a>
        </li>
       </ul> */}

 <button type="button" class="btn btn-primary btn-  m mr-auto">Cart &nbsp;  (<span>{totalCounters}</span>)  </button>
        
    </nav>);
}

export default Nav;

