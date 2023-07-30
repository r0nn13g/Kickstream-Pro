import '../styles/navbar-styles.css'; 
import {Link} from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import React, { useState, useEffect } from "react";
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SdStorageOutlinedIcon from '@mui/icons-material/SdStorageOutlined';
// import ContactPageIcon from '@mui/icons-material/ContactPage';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth <= 820);
  const [clickedLinks, setClickedLinks] = useState({}); 

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setIsMobile(newWidth <= 820);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle the click event and update the clickedLinks state
  const handleLinkClick = (linkId) => {
    setClickedLinks((prevState) => ({
      ...prevState,
      [linkId]: !prevState[linkId], 
    }));
  };

  return (
    <nav className="nav-bar">
      <div className='mobile-menu-container'>
        {isMobile ? (
          <>
            {/* ÷÷ */}
              <Link
                id="mobile-nav-item"
                to={'/support'}
                path='relative'
                style={{
                  textDecoration: 'none',
                  fill: clickedLinks["support"] ? 'var(--white-elements)' : 'var(--gray-elements)',
                }}
                onClick={() => handleLinkClick("support")}
              >
                <CurrencyBitcoinIcon />
              </Link>
            <Link
              id="mobile-nav-item"
              to={'/trending'}
              path='relative'
              style={{
                textDecoration: 'none',
                fill: clickedLinks["trending"] ? 'var(--white-elements)' : 'var(--gray-elements)',
              }}
              onClick={() => handleLinkClick("trending")}
            >
              <AutoGraphIcon />
            </Link>
              <Link
                id="mobile-nav-item"
                to={'/'}
                path='relative'
                onClick={() => handleLinkClick("home")}
              >
                <img id="home-mobile-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster" />
              </Link>
              <Link
                id="mobile-nav-item"
                to={'/create'}
                path='relative'
                style={{
                  textDecoration: 'none',
                  fill: clickedLinks["create"] ? 'var(--white-elements)' : 'var(--gray-elements)',
                }}
                onClick={() => handleLinkClick("create")}
              >
                <AddCircleOutlineIcon />
              </Link>
            <Link
              id="mobile-nav-item"
              to={'/contact'}
              path='relative'
              style={{
                textDecoration: 'none',
                fill: clickedLinks["contact"] ? 'var(--white-elements)' : 'var(--gray-elements)',
              }}
              onClick={() => handleLinkClick("contact")}
            >
              <SdStorageOutlinedIcon />
            </Link>
          </>
        ) : (
          // Show the Temporary Drawer for larger screens
          <div className="browser-nav-container">
            <Link id="home-logo-link" to={'/'} path='relative'>
              <img id="home-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster" />
            </Link>
            <TemporaryDrawer />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
