import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Homepage.css';
import Footer from "../components/Footer";

const homepage = () => {
  return(
    <div className='homepage-container'>
      <div className="home-text">
       {/* <p>Welcome to the Kicksta</p> */}
       <Link to={'/channels'}>
       <img id="home-page-logo"src={'https://i.imgur.com/fExb69W.png'} alt='logo'/>
       </Link>
      </div>
       <Footer/>
    </div>
  )

}

export default homepage;