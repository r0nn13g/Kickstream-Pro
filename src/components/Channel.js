import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/getchannels.css';

const Channel = () => {
  const [data, setData] = useState([]);
  // const [slug, setSlug] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://kick.com/api/v1/channels/garydavid');
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
          let isLive;
          let activeOrBanned;
          let viewerCount;
          let streamTitle;

          if(data){
            console.log(data)
                  activeOrBanned = data.is_banned === true ? <p>Banned</p> : <p>Active</p>;
                    console.log(activeOrBanned.props.children);
                
                  isLive = data.livestream !== null ?  <p>LIVE</p> : <p>OFFLINE</p>;
                    console.log(isLive.props.children)
                  
                    if(data.livestream){
                      viewerCount = data.livestream.viewer_count;
                        console.log(viewerCount);
                      streamTitle = data.livestream.session_title;
                        console.log(streamTitle);
                    } else {
                      viewerCount = undefined;
                        console.log(viewerCount);
                      streamTitle = null;
                    }
            
                    if(data.user){
                      pfp = data.user.profile_pic;
                        console.log(pfp)
                      channel = data.user.username
                        console.log(channel);
                    } else {
                      pfp = '';
                    }
            }
            
          return (
            <div key={data.id} className='live-stream-card'>
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
  };
export default Channel;