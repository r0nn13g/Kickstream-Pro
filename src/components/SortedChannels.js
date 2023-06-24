import {useState, useEffect} from "react";
import '../Styles/getchannels.css';
import axios from "axios";

let pfp;
let isLive;
let channel;
let streamTitle;
let rawViewers;
let followers;
let followerCount;
let viewerCount;
let previousStreamTitle;

let kickAvatar = 'https://dbxmjjzl5pc1g.cloudfront.net/3b83fba0-3fe7-4538-ae3f-3e95592706ec/images/user-profile-pic.png';

const SortedChannels = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
          let urls = [
                'https://kick.com/api/v1/channels/drdisrespect',
                'https://kick.com/api/v1/channels/ludwig',
                'https://kick.com/api/v1/channels/xqc',
                'https://kick.com/api/v1/channels/adinross',
                'https://kick.com/api/v1/channels/brucedropemoff',
                'https://kick.com/api/v1/channels/iceposeidon',
                'https://kick.com/api/v1/channels/eddie',
                'https://kick.com/api/v1/channels/sam',
                'https://kick.com/api/v1/channels/imjoel3004',
                'https://kick.com/api/v1/channels/garydavid',
                'https://kick.com/api/v1/channels/johnnysomali',
          ];
          const responses = await Promise.all(urls.map(url => axios.get(url)));  
          const responseData = responses.map((response) => response.data);
          const sortedData = [...responseData].sort((a, b) => {
            return (b?.livestream?.viewer_count || 0) - (a?.livestream?.viewer_count || 0);
          });
          setData(sortedData);
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
      {data.map((item,index) => {
        if(item && item.user && item.previous_livestreams[0]){
          channel = item.user.username;
          // console.log("Channel:", channel);
          followerCount = item.followersCount;
          followers = followerCount.toLocaleString("en-US");
          previousStreamTitle = item.previous_livestreams[0].session_title
          pfp = item.user.profile_pic;
        } else {
          previousStreamTitle = "No titles yet.";
        };
        
        if(item.livestream){
            rawViewers = item.livestream.viewer_count;
            console.log(rawViewers);
            viewerCount = rawViewers.toLocaleString("en-US");
              
          streamTitle = item.livestream.session_title;
            } else {
              viewerCount = undefined;
              streamTitle = `Last Title: ${previousStreamTitle}`;
            };

            if(item.user.profile_pic === null && item.livestream === null ){
              channel = item.user.username;
              // console.log("Channel:",channel)
              followerCount = item.followersCount;
              followers = followerCount.toLocaleString("en-US");
              previousStreamTitle = "No titles yet.";
              pfp = kickAvatar;
           }
              isLive = item.livestream !== null? <p id='online-live'>LIVE</p> : <p id='offline-live'>offline</p>;
            
                    return(
                      <div key={index} className='live-stream-card'>
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
export default SortedChannels;
