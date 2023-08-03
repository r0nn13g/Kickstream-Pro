import React from "react";
import Channels from "../components/Channels.js";
import Footer from '../components/Footer.js';
import AdTicker from "../components/AdTicker.js";

const ShowChannels = () => {
    return(
      <React.Fragment>
        <AdTicker />
        <Channels />
        <Footer />
    </React.Fragment>
    )
};

export default ShowChannels;