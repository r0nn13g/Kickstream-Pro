import React from "react";
import {Link} from "react-router-dom";
import '../styles/navbar-styles.css'; 
import TemporaryDrawer from "./TemporaryDrawer";

const Navbar = () => {
  return(
    <nav>
      <div className="nav-bar">
      <div className="home-logo-container">
        <Link id="home-logo-link" to={'/'} path='relative'>
         <img id="home-logo" src={'https://i.imgur.com/3dmvkBd.png'} alt="kickster"/>
        </Link>
      </div>
      <div className='hamburger-menu-container'>
        <TemporaryDrawer/>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;