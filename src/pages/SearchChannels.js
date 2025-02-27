import React from "react";
import "../styles/search-channels.css"
import AdTicker from "../components/AdTicker.js"
import Search from "../components/Search.js";
import Footer from '../components/Footer.js';

  const SearchChannels = () => {
    return (
        <div className="search-channels-container">
            <React.Fragment>
             <AdTicker />
              <Search />
             <Footer />
            </React.Fragment>
        </div>
    );
};
  
export default SearchChannels;