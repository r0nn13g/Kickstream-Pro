import React from "react";
import {Link} from "react-router-dom";
import '../styles/navbar-styles.css'; 
import TemporaryDrawer from "./TemporaryDrawer";
import { useState, useEffect } from "react";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ContactPageIcon from '@mui/icons-material/ContactPage';

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
    <nav>
      <div className="nav-bar">
        <div className='hamburger-menu-container'>
          {isMobile ? (
            <>
           {/* ÷÷ */}
           <Link id="home-mobile-link" to={'/'} path='relative'>
            <img id="home-mobile-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
          </Link>
          <Link id="trending-mobile-link" to={'/trending'} path='relative' style={{textDecoration: 'none'}}>
            <AutoGraphIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="create-mobile-link" to={'/create'} path='relative' style={{textDecoration: 'none'}}>
            <AddCircleOutlineIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="support-mobile-link" to={'/support'} path='relative' style={{textDecoration: 'none'}}>
            <MonetizationOnIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
          <Link id="contact-mobile-link" to={'/contact'} path='relative' style={{textDecoration: 'none'}}>
            <ContactPageIcon style={{ fill: 'var(--gray-elements)' }}/>
          </Link>
            </>
          ) : (
            // Show the Temporary Drawer for larger screens
          <div className="browser-">
          <Link id="home-logo-link" to={'/'} path='relative'>
            <img id="home-logo" src={'https://i.imgur.com/fExb69W.png'} alt="kickster"/>
          </Link>
          <TemporaryDrawer />
        </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
