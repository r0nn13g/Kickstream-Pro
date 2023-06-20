import React, {useState, useEffect}from "react";
import axios from 'axios';
import '../Styles/getchannels.css';

const GetChannels = () => {
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
      setInterval(fetchData, refreshInterval);
      fetchData();
    }, []);
    let pfp;
    let isLive;
    let channel;
    let streamTitle;
    let accountStatus;
    let rawViewers;
    let viewerCount;
        return (
          <div>
            {data.map((item) => {
              if(data){
                console.log(data)
                
                accountStatus = item.is_banned === true ? <p>BANNED</p> : <p>ACTIVE</p>;
                  console.log("Account Status", accountStatus.props.children);       
                isLive = item.livestream !== null? <p>LIVE</p> : <p></p>;
                  console.log(isLive.props.children);    
                    
                    if(item.user){
                      pfp = item.user.profile_pic;
                        channel = item.user.username;
                        console.log("Channel:", channel);
                    } else {
                      pfp = 'https://cdn2.iconfinder.com/data/icons/social-media-and-logos-vol-1';
                    };
                    
                    if(item.livestream){
                      rawViewers = item.livestream.viewer_count;
                      viewerCount = rawViewers.toLocaleString("en-US") + " " + "Viewers";
                      streamTitle = item.livestream.session_title;
                        console.log("Viewers:", viewerCount);
                        console.log("Title:", streamTitle);
                    } else {
                      viewerCount = undefined;
                      streamTitle = "OFFLINE";
                        console.log("offline");
                    };
                    
                    if(!isLive && item.previous_livestream){
                      streamTitle = item.previous_livestream.session_title;
                        console.log("Stream title", streamTitle);
                    };
                } else {

                }
                    return(
                      <div key={item.id} className='live-stream-card'>
                        <div className='channel-pfp-container'>
                          <img  id='channel-pfp' src={pfp} alt='channel_pfp'/>
                        </div>
                        <div  className='live-stream-details-container'>
                        <div className='channel-name-container'>
                          <h5 id='channel-name'>{channel}</h5>
                        </div> 
                          <h5>{streamTitle}</h5>
                        </div>
                        <div className="is-live">
                          <h5 id="is-online">{isLive}</h5>
                        </div>
                        <div className='live-viewers-count-container'>
                          <b>{viewerCount}</b>
                        </div>
                  
                      </div>
                    )
                  })}
            </div>
    );
  };
export default GetChannels;
