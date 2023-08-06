import React from "react";
import Trending from "../components/Trending.js";
import Footer from '../components/Footer.js';
import AdTicker from "../components/AdTicker.js";

const ShowTrending = () => {
    return(
      <React.Fragment>
        <AdTicker />
        <Trending />
        <Footer />
    </React.Fragment>
    )
};

export default ShowTrending;