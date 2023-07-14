import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return(
    <div className="nav">
      <Link to='/dev'>
      <img id="nav-logo"src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
      </Link>
    </div>
  )
}

export default Nav;