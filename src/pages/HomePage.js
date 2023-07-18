import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage-styles.css';
import Footer from "../components/Footer";

const Homepage = () => {
  return(
    <div className='homepage-container'>
      <div className="home-text">
       {/* <p>Welcome to the Kicksta</p> */}
       <Link to={'/channels'}>
       <img id="home-page-logo"src={'https://i.imgur.com/3dmvkBd.png'} alt='logo'/>
       </Link>
       <p>dont break it.</p>
      </div>
       <Footer/>
    </div>
  )

}

export default Homepage;