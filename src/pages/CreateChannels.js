import React from "react";
import "../styles/create-channels.css"
import Create from "../components/Create.js";
import Footer from '../components/Footer.js';
import BasicAccordianCreate from '../components/BasicAccordianCreate.js';
import AdTicker from '../components/AdTicker.js';   

  const CreateChannels = () => {
    return (
        <div className="create-channels-container">
            <React.Fragment>
                <AdTicker />
                <BasicAccordianCreate />
                <Create />
                <Footer />
            </React.Fragment>
        </div>
    );
};
  
export default CreateChannels;