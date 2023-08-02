import React from "react";
import {Link} from "react-router-dom";
import '../styles/navbar-styles.css'; 
import TemporaryDrawer from "./TemporaryDrawer";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
// import SdStorageOutlinedIcon from '@mui/icons-material/SdStorageOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

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
            <img id="home-mobile-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
          </Link>
          <Link id="mobile-nav-item" to={'/trending'} path='relative' style={{textDecoration: 'none'}}>
            <AutoGraphIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="mobile-nav-item" to={'/create'} path='relative' style={{textDecoration: 'none'}}>
            <AddCircleOutlineIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="mobile-nav-item" to={'/support'} path='relative' style={{textDecoration: 'none'}}>
            <CardGiftcardOutlinedIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <a id="mobile-nav-item" href= 'https://www.github.com/r0nn13g/kickster-for-kick-live-streaming.git' target="_blank"  rel="noreferrer" style={{textDecoration: 'none'}}>
              <GitHubIcon style={{ fill: 'var(--gray-elements)' }}/>
          </a>
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
