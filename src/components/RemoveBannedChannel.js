import {useState, useEffect} from "react";
import '../Styles/getchannels.css';
import streamers from "./streamers";

let pfp;
let isLive;
let channel;
let streamTitle;
let rawViewers;
let followers;
let followerCount;
let viewerCount;
let previousStreamTitle;

const RemoveBannedChannel = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const responses = await Promise.all(streamers());  
          const responseData = responses.filter(response => {
            if(response instanceof Error){
              // Handle the error response
            if (response.response && response.response.status === 404) {
              // Remove the failed URL from state
              return false;
            }
            console.error('Error:', response);
            return true; // Keep other error responses
          }
          return true; // Keep successful responses
        }).map(response => response.data);

        setData(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    }       
      const refreshInterval = 70000;
      fetchData();
      setInterval(fetchData, refreshInterval);
    }, []);
    
    return (
      <div className="live-stream-card-container">
        {data.map((item) => {
          if(data){ 
            if(item && item.user){
              pfp = item.user.profile_pic;
              channel = item.user.username;
              followerCount = item.followersCount;
              followers = followerCount.toLocaleString("en-US");
              console.log("Channel:", channel);
              console.log(followerCount);
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
                          <h6>{followers}</h6>
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
export default RemoveBannedChannel;
