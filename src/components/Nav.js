import React from "react";
import {Link} from "react-router-dom";

import '../index.css'; 

const Nav = () => {
  return(
    <nav>
      <div className="nav-bar">
      <div className="home-logo-container">
        <Link id="home-logo-link" to={'/dev'} path='relative'>
         <img id="home-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
        </Link>
      </div>
      <div className='hamburger-menu-container'>
        <img id="hamburger-menu" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/120px-Hamburger_icon_white.svg.png?20190820131613'} alt="kickster"/>
      </div>
      </div>
    </nav>
  )
}

export default Nav;