import React from "react";
import '../styles/navbar-styles.css'; 
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import RedeemIcon from '@mui/icons-material/Redeem';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import KickLogo from '../assets/kickster.png';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState(null);

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

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  }

  return (
    <nav className="nav-bar">
        <div className='mobile-menu-container'>
          {isMobile ? (
            <>
           <Link 
              id="mobile-nav-item"
              to={'/'}
              path='relative'
              onClick={() => handleLinkClick('home')}>
            <img id="home-mobile-logo" src={KickLogo} alt="kickster"/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/live'} 
            path='relative' 
            onClick={() => handleLinkClick('live')}
            style={{textDecoration: 'none'}}>
            <AutoGraphIcon style={{  fill: activeLink === 'live' ? 'var(--green-elements)' : 'var(--gray-elements)' }}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/news'} 
            path='relative'
            onClick={() => handleLinkClick('news')} 
            style={{textDecoration: 'none'}}>
            <NewspaperIcon style={{fill: activeLink === 'news' ? 'var(--green-elements)' : 'var(--gray-elements)'}}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/checker'} 
            path='relative'
            onClick={() => handleLinkClick('checker')} 
            style={{textDecoration: 'none'}}>
            <HowToRegIcon style={{ fill: activeLink === 'checker' ? 'var(--green-elements)' : 'var(--gray-elements)' }}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/support'} 
            path='relative'
            onClick={() => handleLinkClick('support')} 
            style={{textDecoration: 'none'}}>
            <RedeemIcon style={{ fill: activeLink === 'support' ? 'var(--green-elements)': 'var(--gray-elements' }}/>
          </Link>
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
