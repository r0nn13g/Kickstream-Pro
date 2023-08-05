import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage-styles.css';
import HomeAnimation from '../assets/LSS.gif';
import MaterialCards from "../components/MaterialCards";
// import ChatCard from "../components/ChatCard";
import Footer from "../components/Footer";

const Home = () => {  
  return(
    <div className='homepage-container'>
          <div className="home-text">
          <Link to={'/trending'}>
            <img id="home-animation" src={HomeAnimation} alt="kickster"/>
            <div></div>
            <img id="home-enter-logo" src={'https://i.imgur.com/L59bKvb.png'} alt='enter-button'/>
          </Link>
        </div>
          {/* <ChatCard /> */}
          <MaterialCards/>
          <Footer/>
    </div>
  )
};

export default Home;