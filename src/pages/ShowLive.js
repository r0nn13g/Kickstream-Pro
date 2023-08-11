import React from "react";
import Live from "../components/Live.js";
import Footer from '../components/Footer.js';
import AdTicker from "../components/AdTicker.js";

const ShowLive = () => {
  return (
    <div>
      <AdTicker />
      <Live />
      <Footer />
    </div>
  );
};

export default ShowLive;
