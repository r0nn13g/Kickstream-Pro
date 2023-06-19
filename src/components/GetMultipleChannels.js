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
      const request3 = axios.get('https://kick.com/api/v1/channels/xqc');

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
            console.log(activeOrBanned.props.children);

          isOnline = data.livestream !== null ?  <p>🔴 Live</p> : <p>Offline</p>;
            console.log(isOnline.props.children)
          
            if(data.livestream){
              liveViewerCount = data.livestream.viewer_count;
                console.log(liveViewerCount);
              liveStreamTitle = data.livestream.session_title;
                console.log(liveStreamTitle);
            } else {
              liveViewerCount = 0;
                console.log(liveViewerCount);
              liveStreamTitle = 'n/a';
            }
    
            if(data.user){
              pfp = data.user.profile_pic;
                console.log(pfp)
              channelName = data.user.username
                console.log(channelName);
            } 
    }

    
    console.log(data)
    return (
    <div>
      {data.map((item) => (
        <div key={item.id} className='live-stream-card'>
        <div className='channel-pfp-container'>
          <img id='channel-pfp' src={item.user.profile_pic} alt='channel_pfp'/>
        </div>
        <div  className='channel-name-container'>
          <h3 id='channel-name'>{item.user.username}</h3>
        </div>
        <div  className='live-stream-details-container'>
          {/* {item.livestream.session_title} */}
        </div>
        <div className='live-viewers-count-container'>
          {/* <p>{item.livestream.viewer_count}</p> */}
          <p>Viewers: <b>{liveViewerCount}</b></p>
            {/* {activeOrBanned} */}
        </div>
        </div>
      ))}
    </div>
  );
};

export default GetChannels;
