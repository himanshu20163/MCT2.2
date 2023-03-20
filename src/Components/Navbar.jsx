import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './heade.css';


const Navbar = ({setshowbar}) => {
  const hide_menu = () =>{
     setshowbar(false);
  }
  return (
    <div id="menubar">
        <h5 id="logo">Geekster</h5>
        <Link to="/Home" ><li>Home</li></Link>
        <Link to="/Products">Products</Link>
        <Link to="/User">User</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/" onClick={hide_menu}>Logout</Link>
    </div>
  )
}

export default Navbar