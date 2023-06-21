import React, {useState, useEffect}from "react";
import axios from 'axios';
import '../Styles/getchannels.css';
// import streamers from "./streamers";
// console.log(streamers)

const RemoveBannedChannel = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const request1 = axios.get('https://kick.com/api/v1/channels/xqc');
          const request2 = axios.get('https://kick.com/api/v1/channels/adinross');
          const request3 = axios.get('https://kick.com/api/v1/channels/brucedropemoff');
          const request4 = axios.get('https://kick.com/api/v1/channels/iceposeidon');
          const request5 = axios.get('https://kick.com/api/v1/channels/suspendas');
          const request6 = axios.get('https://kick.com/api/v1/channels/sam');
          const request7 = axios.get('https://kick.com/api/v1/channels/imjoel3004');
          const request8 = axios.get('https://kick.com/api/v1/channels/garydavid');
          const request9 = axios.get('https://kick.com/api/v1/channels/nickwhite');
          const request10 = axios.get('https://kick.com/api/v1/channels/eddie');

          const responses = await Promise.all([request1, request2, request3,request4, request5, request6, request7, request8,  request9, request10]);          
          const responseData = responses.map((response) => response.data);
          
          setData(responseData);
        } catch (error) {
          console.error('Error:', error);
        };
      };
      const refreshInterval = 60000;
      // fetchData();
      setInterval(fetchData, refreshInterval);
    }, []);
    
    let pfp;
    let isLive;
    let channel;
    let streamTitle;
    let rawViewers;
    let viewerCount;
    let previousStreamTitle;

    return (
      <div>
        {data.map((item) => {
          // console.log(data)
            if(data){
              
              if(item && item.user){
                pfp = item.user.profile_pic;
                channel = item.user.username;
                console.log("Channel:", channel);
              } else {
                pfp = 'https://static.wikia.nocookie.net/logopedia/images/8/82/Kick_%28App_Icon%29.svg/revision/latest/scale-to-width-down/250?cb=20230329130702';
              };
              
              if(item && item.user && item.previous_livestreams[0]){
                previousStreamTitle = item.previous_livestreams[0].session_title
                console.log(item.previous_livestreams[0])
                  console.log("Previous title:", previousStreamTitle)
                } else {
                  previousStreamTitle = "OFFLINE";
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
                streamTitle = previousStreamTitle;
              };
              
              isLive = item.livestream !== null? <p>LIVE</p> : <p id='offline-live'>OFFLINE</p>;
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
                          <h6>{streamTitle}</h6>  
                      </div>
                      <div className="is-live">
                        <h6 id="is-online">{isLive}</h6>
                      </div>
                      <div className='live-viewers-count-container'>
                        <h6 id="viewer-count" >{viewerCount}</h6>
                      </div>
                  </div>
            )
          })}
        </div>
      );
    };
export default RemoveBannedChannel;
