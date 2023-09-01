import React from "react";
import "../styles/video-styles.css";
import YTLoader from "../components/YTLoader";
import Footer from '../components/Footer.js';
import AdTicker from "../components/AdTicker.js";

const News = () => {
  return (
    <div>
      <AdTicker />
      <YTLoader />
      <Footer />
    </div>
  )
};

export default News;