import React, {useState, useEffect}from "react";
import '../Styles/getchannels.css';
import { streamers } from "./streamers";

let pfp;
let isLive;
let channel;
let streamTitle;
let rawViewers;
let viewerCount;
let followers;
let followerCount;
let previousStreamTitle;

let kickAvatar = 'https://dbxmjjzl5pc1g.cloudfront.net/3b83fba0-3fe7-4538-ae3f-3e95592706ec/images/user-profile-pic.png';

const GetChannels = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responses = await Promise.all(streamers);  
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
          console.log(data);
          if(item && item.user && item.previous_livestreams[0]){
            channel = item.user.username;
            console.log("Channel:", channel);
            followerCount = item.followersCount;
            followers = followerCount.toLocaleString("en-US");
            previousStreamTitle = item.previous_livestreams[0].session_title
            pfp = item.user.profile_pic;
          } else {
            previousStreamTitle = "No titles yet.";
          };
          
          if(item.livestream){
            rawViewers = item.livestream.viewer_count;
            viewerCount = rawViewers.toLocaleString("en-US");
            console.log("Viewer count:", viewerCount);
                streamTitle = item.livestream.session_title;
              } else {
                viewerCount = undefined;
                streamTitle = `Last Title: ${previousStreamTitle}`;
              };

              if(item.user.profile_pic === null && item.livestream === null ){
                channel = item.user.username;
                console.log("Channel:",channel)
              followerCount = item.followersCount;
              followers = followerCount.toLocaleString("en-US");
              previousStreamTitle = "No titles yet.";
              pfp = kickAvatar;
             }
                isLive = item.livestream !== null? <p id='online-live'>LIVE</p> : <p id='offline-live'>offline</p>;
              

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
export default GetChannels;