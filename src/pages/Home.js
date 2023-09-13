import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage-styles.css';
import YTLoader from '../components/YTLoader.js';
import Footer from "../components/Footer";
import kicksterLogo from "../assets/LSS.gif";
import AdTicker from '../components/AdTicker.js';
import ClockWidget from "../components/ClockWidget";

const Home = () => {  
  return(
    <div className="'homepage-container'">
      <AdTicker />
      <div className="home-text">
          <Link to={'/live'}>
            <img id="home-animation" src={kicksterLogo} alt="Live-streaming-solutions"/>
            <div></div>
            {/* <img id="home-enter-logo" src={'https://i.imgur.com/L59bKvb.png'} alt='enter-button'/> */}
          </Link>
          <ClockWidget />
          <div></div>
        </div>
          <YTLoader />
          <Footer/>
    </div>
  )
};

export default Home;