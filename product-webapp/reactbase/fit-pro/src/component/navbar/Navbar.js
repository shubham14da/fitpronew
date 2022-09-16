import React from 'react';
import {Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/"><p className='navbar_logo'>Profile</p></Link>
        {
          // <Link to="/appointment"><p> Appointments</p></Link>
        }
        <Link to="/experts"><p>Expert selection</p></Link>
    </div>
  )
}

export default Navbar;