import React, {useState, useEffect}from "react";
import axios from 'axios';
import '../Styles/getchannels.css';

const GetChannels = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
    try {
      const request1 = axios.get('https://kick.com/api/v1/channels/adinross');
      const request2 = axios.get('https://kick.com/api/v1/channels/brucedropemoff');
      const request3 = axios.get('https://kick.com/api/v1/channels/nickwhite');

      const responses = await Promise.all([request1, request2, request3]);
      
      const responseData = responses.map((response) => response.data);
      
      setData(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const refreshInterval = 60000;
  fetchData();
    setInterval(fetchData, refreshInterval);
}, []);
    let pfp;
    let channelName;
    let isOnline;
    let activeOrBanned;
    let liveViewerCount;
    let liveStreamTitle;

    if(data){
            activeOrBanned = data.is_banned === true ? <p>Banned</p> : <p>Active</p>;
              console.log("Status:", activeOrBanned.props.children);

            isOnline = data.livestream !== null ?  <p>🔴 Live</p> : <p>Offline</p>;
              console.log("Online", isOnline.props.children)
            
              if(data.livestream){
                liveViewerCount = data.livestream.viewer_count;
                  console.log("viewer_count:", liveViewerCount);
                liveStreamTitle = data.livestream.session_title;
                  console.log("session_title:", liveStreamTitle);
              } else {
                liveViewerCount = 0;
                  console.log(liveViewerCount);
                liveStreamTitle = 'n/a';
                console.log("Livestream title:", liveStreamTitle)
              }
      
              if(data.user){
                pfp = data.user.profile_pic;
                  console.log("profile_pic", pfp)
                channelName = data.user.username
                  console.log("username:", channelName);
              } 
      }

    
    console.log(data)
    return (
      <div>
        {data.map((item) => {
           if(data){
            console.log(data)
                  activeOrBanned = item.is_banned === true ? <p>Banned</p> : <p>Active</p>;
                    console.log(activeOrBanned.props.children);
                
                  isOnline = item.livestream !== null? <p>🔴 Live</p> : <p>Offline</p>;
                    console.log(isOnline.props.children)
                  
                    if(item.livestream){
                      liveViewerCount = item.livestream.viewer_count;
                        console.log(liveViewerCount);
                      liveStreamTitle = item.livestream.session_title;
                        console.log(liveStreamTitle);
                    } else {
                      liveViewerCount = 0;
                        console.log(liveViewerCount);
                      liveStreamTitle = 'n/a';
                    }
            
                    if(item.user){
                      pfp = item.user.profile_pic;
                        console.log(pfp)
                      channelName = item.user.username
                        console.log(channelName);
                    } else {
                      pfp = 'https://cdn2.iconfinder.com/data/icons/social-media-and-logos-vol-1';
                    }
            }

            return(
              <div key={item.id} className='live-stream-card'>
              <div key={item.id} className='channel-pfp-container'>
                <img  id='channel-pfp' src={pfp} alt='channel_pfp'/>
              </div>
              <div className='channel-name-container'>
                <h3 id='channel-name'>{channelName}</h3>
              </div>
              <div  className='live-stream-details-container'>
                {liveStreamTitle}
              </div>
              <div className='live-viewers-count-container'>
                 <b>{activeOrBanned}</b>
                 <p id="is-online">{isOnline}</p>
                  Viewers: <b>{liveViewerCount}</b>
              </div>
            </div>
            )
      })}
    </div>
    );
  };
export default GetChannels;
