import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetChannelDetails = () => {
  const [data, setData] = useState([]);
  // const [slug, setSlug] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://kick.com/api/v1/channels/BruceDropemOff');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    
          let channel;
          let isOnline;
          let activeOrBanned;
          let liveViewerCount;

          if(data){
            console.log(data)
              channel = data.slug
                console.log(channel);
    
              isOnline = data.livestream === null ? <p>This channel is offline</p> : <p>Online</p>;
                console.log(isOnline.props.children)
              
              activeOrBanned = data.is_banned === true ? <p>Banned</p> : <p>Active</p>;
                console.log(activeOrBanned.props.children);
            }
            
            if(data.livestream){
              liveViewerCount = data.livestream.viewer_count;
                console.log(liveViewerCount);
            } else{
              liveViewerCount = 0;
            }
            

        return (
          <div className='live-stream-card'>
              <ul>
                <li>{channel}</li>
                <li>{isOnline}</li>
                <li>{activeOrBanned}</li>
                <li>{liveViewerCount}</li>
              </ul>
            </div>
    )
};
export default GetChannelDetails;