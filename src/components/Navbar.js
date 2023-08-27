import React from "react";
import '../styles/navbar-styles.css'; 
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import TemporaryDrawer from "./TemporaryDrawer";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import RedeemIcon from '@mui/icons-material/Redeem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import KickLogo from '../assets/kickster.png';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 820;

  return (
    <nav className="nav-bar">
        <div className='mobile-menu-container'>
          {isMobile ? (
            <>
           <Link id="mobile-nav-item" to={'/'} path='relative'>
            <img id="home-mobile-logo" src={KickLogo} alt="kickster"/>
          </Link>
          <Link id="mobile-nav-item" to={'/live'} path='relative' style={{textDecoration: 'none'}}>
            <LiveTvIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="mobile-nav-item" to={'/create'} path='relative' style={{textDecoration: 'none'}}>
            <AddCircleOutlineIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="mobile-nav-item" to={'/checker'} path='relative' style={{textDecoration: 'none'}}>
            <HowToRegIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="mobile-nav-item" to={'/support'} path='relative' style={{textDecoration: 'none'}}>
            <RedeemIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          {/* <a id="mobile-nav-item" href= 'https://www.github.com/r0nn13g/kickster-for-kick-live-streaming.git' target="_blank"  rel="noreferrer" style={{textDecoration: 'none'}}>
              <GitHubIcon style={{ fill: 'var(--gray-elements)' }}/>
          </a> */}
            </>
          ) : (
            // Show the Temporary Drawer for larger screens
          <div className="browser-nav-container">
          <Link id="home-logo-link" to={'/'} path='relative'>
            <img id="home-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
          </Link>
          <TemporaryDrawer />
        </div>
          )}
        </div>
    </nav>
  );
}

export default Navbar;
