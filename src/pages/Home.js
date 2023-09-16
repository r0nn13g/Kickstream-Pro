import React from "react";
import { Link } from "react-router-dom";
import '../styles/homepage-styles.css';
import Footer from "../components/Footer";
import kicksterLogo from "../assets/LSS.gif";

const Home = () => {  
  return(
    <div className="'homepage-container'">
      <div className="home-text" style={{marginTop: "180px"}}>
          <Link to={'/live'}>
            <img id="home-animation" src={kicksterLogo} alt="Live-streaming-solutions"/>
          </Link>
          <div></div>
        </div>
          <Footer/>
    </div>
  )
};

export default Home;