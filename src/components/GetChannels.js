import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetChannels = () => {
  const [data, setData] = useState([]);
  // const [slug, setSlug] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://kick.com/api/v1/channels/nickwhite');
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
          let channel;
          let isOnline;
          let activeOrBanned;
          let liveViewerCount;

          if(data){
            console.log(data)
              channel = data.slug
                console.log(channel);
             
                  activeOrBanned = data.is_banned === true ? <p>Banned</p> : <p>Active</p>;
                    console.log(activeOrBanned.props.children);
                
                  isOnline = data.livestream !== null ?  <p>Live 🔴</p> : <p>Offline 💤</p>;
                    console.log(isOnline.props.children)
                  
                    if(data.livestream){
                      liveViewerCount = data.livestream.viewer_count;
                        console.log(liveViewerCount);
                    } else {
                      liveViewerCount = 0;
                        console.log(liveViewerCount);
                    }
            
                    if(data.user){
                      pfp = data.user.profile_pic;
                        console.log(pfp)
                    }
            }
            
        return (
          <div className='live-stream-card'>
            <div className='channel-pfp-container'>
                <img id="channel-pfp" src={pfp} alt="channel_pfp"/>
            </div>
              <ul>
                <li>{channel}</li>
                <li>{isOnline}</li>
                <li>{activeOrBanned}</li>
                <li>{liveViewerCount}</li>
              </ul>
            </div>
    )
};
export default GetChannels;