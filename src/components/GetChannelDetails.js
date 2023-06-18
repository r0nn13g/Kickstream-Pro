import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetChannelDetails = () => {
  const [data, setData] = useState([]);
  // const [slug, setSlug] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('https://kick.com/api/v1/channels/Suspendas');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
        //Data array
        console.log(data)
        // channel
        const channel = data.slug
          console.log(channel)

        const isUserbanned = data.is_banned === true ? <p>Banned</p> : <p>Active</p>;
          console.log(isUserbanned.props.children);

        const isActive = data.livestream === null ? <p>This channel is offline</p> : <p>Online</p>;
          console.log(isActive.props.children)

        const livestreamViewers = data.livestream;
          console.log(livestreamViewers)

        const viewerCount = data.livestream;
          console.log(viewerCount);

        return (
            <div className='live-stream-card'>
              <ul>
                <li>Channel: {data.slug}</li>
                <li>{isUserbanned}</li>
                <li>Status: {isActive}</li>
                <li>Viewers: {viewerCount}</li>
              </ul>
            </div>
    )
};
export default GetChannelDetails;