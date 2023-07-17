import React from "react";
import {Link} from "react-router-dom";
import '../Styles/NavBar.css'; 
import TemporaryDrawer from "./TemporaryDrawer";

const Navbar = () => {
  return(
    <nav>
      <div className="nav-bar">
      <div className="home-logo-container">
        <Link id="home-logo-link" to={'/'} path='relative'>
         <img id="home-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
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