import React from "react";
import BanChecker from "../components/BanChecker";
import AdTicker from '../components/AdTicker.js';  

const ShowChecker = () => {
  return (
    <div className="ban-checker-wrapper">
      <AdTicker />
      <BanChecker />
    </div>
  )
};

export default ShowChecker;