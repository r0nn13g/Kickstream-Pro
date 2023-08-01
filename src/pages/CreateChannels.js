import React from "react";
import "../styles/create-channels.css"
import Create from "../components/Create.js";
import Footer from '../components/Footer.js';
import BasicAccordianCreate from '../components/BasicAccordianCreate.js';

  const CreateChannels = () => {
    return (
        <div className="create-channels-container">
            <React.Fragment>
                <BasicAccordianCreate />
                <Create />
                <Footer />
            </React.Fragment>
        </div>
    );
};
  
export default CreateChannels;