// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';


const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>WikiCountries</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;