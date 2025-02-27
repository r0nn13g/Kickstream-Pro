import React from "react";
import AdTicker from '../components/AdTicker.js';
import Live from "../components/LiveChannels.js";
import Footer from '../components/Footer.js';

const ShowLive = () => {
  return (
    <div className="show-live">
      <AdTicker/>
      <Live />
      <Footer />
    </div>
  );
};

export default ShowLive;
