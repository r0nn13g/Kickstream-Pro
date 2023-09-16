import React from "react";
import '../styles/navbar-styles.css'; 
import {Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import RedeemIcon from '@mui/icons-material/Redeem';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import KickLogo from '../assets/kickster.png';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation(); 
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

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveLink('home');
        break;
      case '/live':
        setActiveLink('live');
        break;
      case '/news':
        setActiveLink('news');
        break;
      case '/checker':
        setActiveLink('checker');
        break;
      case '/support':
        setActiveLink('support');
        break;
      default:
        setActiveLink(null);
        break;
    }
  }, [location.pathname]);


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
            <img id="home-mobile-logo" src={KickLogo} alt="kickster" style={{  filter: activeLink === 'home' || activeLink === null ? 'grayscale(0%)' : 'grayscale(100%)'}}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/live'} 
            path='relative' 
            onClick={(e) =>{ 
              handleLinkClick('live')}}
            style={{textDecoration: 'none'}}>
            <AutoGraphIcon style={{  fill: activeLink === 'live' ? 'var(--green-elements)' : 'var(--white-elements)'}}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/news'} 
            path='relative'
            onClick={(e) => {
              handleLinkClick('news');
            }} 
            style={{textDecoration: 'none'}}>
            <NewspaperIcon style={{fill: activeLink === 'news' ? 'var(--green-elements)' : 'var(--white-elements)'}}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            path='relative'
            onClick={(e) => {
              handleLinkClick('checker');
            }} 
              to={'/checker'} 
            style={{textDecoration: 'none'}}>
            <HowToRegIcon style={{ fill: activeLink === 'checker' ? 'var(--green-elements)' : 'var(--white-elements)'}}/>
          </Link>
          <Link 
            id="mobile-nav-item" 
            to={'/support'} 
            path='relative'
            onClick={(e) => {
              handleLinkClick('support');
            }} 
            style={{textDecoration: 'none'}}>
            <RedeemIcon style={{ fill: activeLink === 'support' ? 'var(--green-elements)': 'var(--white-elements'}}/>
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
