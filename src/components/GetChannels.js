import React, {useState, useEffect}from "react";
import streamers from "./streamers";
import '../Styles/getchannels.css';

let pfp;
let isLive;
let channel;
let streamTitle;
let rawViewers;
let viewerCount;
let previousStreamTitle;

const GetChannels = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responses = await Promise.all(streamers());  
          const responseData = responses.map((response) => response.data);       
          setData(responseData);
        } catch (error) {
          console.error('Error:', error);
        };
      };
      const refreshInterval = 70000;
      fetchData(); 
      setInterval(fetchData, refreshInterval);
    }, []);

    return (
      <div className="live-stream-card-container">
        {data.map((item) => {
          // console.log(data);
            if(data){  
              if(item && item.user){
                pfp = item.user.profile_pic;
                channel = item.user.username;
                console.log("Channel:", channel);
              } else {
                pfp = '';
              };
              
              if(item && item.user && item.previous_livestreams[0]){
                previousStreamTitle = item.previous_livestreams[0].session_title
                console.log(item.previous_livestreams[0])
                  console.log("Previous title:", previousStreamTitle)
                } else {
                  previousStreamTitle = "No titles yet.";
                  console.log("previous stream title does not exist ")
              };
                    
              if(item.livestream){
                rawViewers = item.livestream.viewer_count;
                viewerCount = rawViewers.toLocaleString("en-US");
                streamTitle = item.livestream.session_title;
                  console.log("Current title:", streamTitle);
                  console.log("Viewer count:", viewerCount);
              } else {
                viewerCount = undefined;
                streamTitle = `Last Title: ${previousStreamTitle}`;
              };
              
              isLive = item.livestream !== null? <p>LIVE</p> : <p id='offline-live'>offline</p>;
            };

      return(
          <div key={item.id} className='live-stream-card'>
              <div className='channel-pfp-container'>
                <img  id='channel-pfp' src={pfp} alt='channel_pfp'/>
              </div>
              <div  className='live-stream-details-container'>
                <div className='channel-name-container'>
                  <h6 id='channel-name'>{channel}</h6>
                </div> 
                <div className="stream-title-container">
                  <h6 id="stream-title">{streamTitle}</h6>  
                </div>
              </div>
              <div className="is-live">
                <h6 id="is-online">{isLive}</h6>
                &nbsp;&nbsp;
              <div className='live-viewers-count-container'>
                <h6 id="viewer-count" >{viewerCount}</h6>
              </div>
              </div>
          </div>
          )
        })}
      </div>
    );
  };
export default GetChannels;
