import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/ban-checker-styles.css"
import axios from "axios";

const BanChecker = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [streamerName, setStreamerName] = useState("");
  
  const fetchData = async (streamerName) => {
      try {
        const slug = streamerName.toLowerCase().replace(/\s/g, "");
        const url = `https://kick.com/emotes/${slug}`;
        const response = await axios.get(url);
        const responseData = response.data;
       
        console.log(responseData);
        setData(responseData)
      } catch (error) {
      console.log("Softbanned by kick servers  & cloud flare")
      }
  }
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchData(streamerName);
      setStreamerName("");
    }

  
  return(
    <div className="ban-checker-container">

    </div>
  )
};

export default BanChecker;