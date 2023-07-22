import React from "react";
import "../styles/create-channels.css"
import Create from "../components/Create.js";
import Footer from '../components/Footer.js';

  const CreateChannels = () => {
    return (
        <div className="create-channels-container">
            <Create />
            <Footer />
        </div>
    );
}
  
export default CreateChannels;