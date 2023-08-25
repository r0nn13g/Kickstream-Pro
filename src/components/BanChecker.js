import axios from "axios";
import React, { useState } from "react";
import "../styles/ban-checker-styles.css";

const BanChecker = () => {
  const [data, setData] = useState([]);
  const [streamerName, setStreamerName] = useState("");

  const fetchData = async (streamerName) => {
    try {
      const slug = streamerName.toLowerCase().replace(/\s/g, "");
      const url = `https://kick.com/emotes/${slug}`;
      const response = await axios.get(url);
      const responseData = response.data;
      setData([responseData]); // Wrap responseData in an array to correctly handle it
    } catch (error) {
      console.log("Softbanned by kick servers & cloud flare");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(streamerName);
    setStreamerName("");
  };
  
  return (
    <div className="ban-checker">
      <div className="ban-checker-input-wrapper">
        <h3 style={{color: "var(--green-elements)", textAlign: "left"}}>BAN HAMMER 🔨</h3>
        <h4 style={{color: "var(--gray-elements)", textAlign: "left"}}>check the account status of any kick channel.</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={streamerName}
            onChange={(event) => setStreamerName(event.target.value)}
            placeholder="Enter streamer's name"
            />
          <button type="submit">Search</button>
        </form>
      </div>
      {data.map((item, index) => {
        let pfp = ""; // Initialize with an empty string
        let streamer = ""; // Initialize with an empty string
        let banStatus = "";
        
        console.log(item[0]);
        if (!item[0]) {
          console.log("This streamer does not exist in our system yet");
          return null; // Return null if the streamer doesn't exist
        }
        if (item[0].user) {
          pfp = item[0].user.profile_pic; // Use item.user.profile_pic
          streamer = item[0].user.username; // Use item.user.username
        }
        
        banStatus = item[0].is_banned ? "BANNED ❌" : "ACTIVE ✅";
        
        return (
          <div className="streamer-ban-details" key={index}>
            <div className="image-wrapper"> 
            <img id="pfp" src={pfp} alt="Profile" />
            </div>
            <div className="streamername-wrapper">
            <h3 id="streamer_name">{`${streamer}`}</h3>
            </div>
            <div className="ban_status_wrapper">
            <h5
                style={{ color: item[0].is_banned ? "red" : "var(--green-elements)" }}
                id="ban-status"
              >
                {banStatus}
              </h5>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default BanChecker;
