import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage-styles.css';
import HomeAnimation from '../assets/LSS.gif';
import YTLoader from '../components/YTLoader.js';
import Footer from "../components/Footer";

const Home = () => {  
  return(
    <div className='homepage-container'>
          <div className="home-text">
          <Link to={'/live'}>
            <img id="home-animation" src={HomeAnimation} alt="kickster"/>
            <div></div>
            <img id="home-enter-logo" src={'https://i.imgur.com/L59bKvb.png'} alt='enter-button'/>
          </Link>
        </div>
          <YTLoader />
          <Footer/>
    </div>
  )
};

export default Home;