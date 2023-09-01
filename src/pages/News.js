import React from "react";
import "../styles/video-styles.css";
import NewsLoader from "../components/NewsLoader";
import Footer from '../components/Footer.js';
import AdTicker from "../components/AdTicker.js";

const News = () => {
  return (
    <div>
      <AdTicker />
      <NewsLoader />
      <Footer />
    </div>
  )
};

export default News;