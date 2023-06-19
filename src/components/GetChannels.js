import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/getchannels.css';

const GetChannels = () => {
  const [data, setData] = useState([]);
  // const [slug, setSlug] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://kick.com/api/v1/channels/adinross');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
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
            console.log(data)
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
                    } else {
                      pfp = 'https://cdn2.iconfinder.com/data/icons/social-media-and-logos-vol-1';
                    }
            }
            
          return (
            <div className='live-stream-card'>
              <div className='channel-pfp-container'>
                <img  id='channel-pfp' src={pfp} alt='channel_pfp'/>
              </div>
              <div className='channel-name-container'>
                <h3 id='channel-name'>{channelName}</h3>
              </div>
              <div className='live-stream-details-container'>
                <h3>{liveStreamTitle}</h3>
              </div>
              <div className='live-viewers-count-container'>
                <p id="is-online">{isOnline}</p>
                <p>Viewers: <b>{liveViewerCount}</b></p>
                  {/* {activeOrBanned} */}
              </div>
            </div>
    )
  };
export default GetChannels;