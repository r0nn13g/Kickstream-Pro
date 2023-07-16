import React from "react";
import { Link } from "react-router-dom";
// import {DensityMediumIcon} from '@mui/icons-material';

const Nav = () => {
  return(
    <div  className="nav-bar">
      <Link id="nav-logo-link" to='/dev'>
      <img id="nav-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
      {/* <img id="nav-logo-right" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/120px-Hamburger_icon_white.svg.png?20190820131613'} alt="kickster"/> */}
      </Link>

    </div>
  )
}

export default Nav;