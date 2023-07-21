import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage-styles.css';
import Footer from "../components/Footer";
// import ActionAreaCard from "../components/ActionAreaCard.tsx";
import HomeAnimation from '../assets/LSS.gif';

const Homepage = () => {
  return(
    <div className='homepage-container'>
      <div className="home-page-card">
        {/* <ActionAreaCard /> */}
      </div>
      <div className="home-text">
       {/* <p>Welcome to the Kicksta</p> */}
       <Link to={'/channels'}>
       <img id="home-animation" src={HomeAnimation} alt="kickster"/>
      
      <div></div>
       <img id="home-enter-logo" src={'https://i.imgur.com/L59bKvb.png'} alt='enter-button'/>
       </Link>
      </div>
        <Footer/>
    </div>
  )

}

export default Homepage;