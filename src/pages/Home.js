import React from "react";
import '../styles/homepage-styles.css';
import Footer from "../components/Footer";
import kicksterLogo from "../assets/LSS.gif";

const Home = () => {  
  return(
    <div className="'homepage-container'">
      <div className="home-text" style={{marginTop: "180px"}}>   
            <img id="home-animation" src={kicksterLogo} alt="Live-streaming-solutions"/>
          <div></div>
        </div>
          <Footer/>
    </div>
  )
};

export default Home;