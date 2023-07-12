import {React, useState, useEffect} from "react";
import '../Styles/getchannels.css';
import axios from "axios";
import { streamers } from "./streamers";

// Declare variables to store data
  let pfp;
  let pfpLive;
  let kickAvatar = 'https://dbxmjjzl5pc1g.cloudfront.net/3b83fba0-3fe7-4538-ae3f-3e95592706ec/images/user-profile-pic.png';
  let isLive;
  let channel;
  let channelLive;
  let streamTitle;
  let titleLive;
  let rawViewers;
  let followers;
  let followerCount;
  let viewerCount;
  let previousStreamTitle;

const SortedChannels = () => {
     // State to store the sorted data
     const [data, setData] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         try {
             const responses = await Promise.all(streamers.map(url => axios.get(url)));  
             const responseData = responses.map((response) => response.data);
               // sorts data area by concurrent viewership
               const sortedData = [...responseData].sort((a, b) => {
                 return (b?.livestream?.viewer_count || 0) - (a?.livestream?.viewer_count || 0);
             });
             setData(sortedData);
           } catch (error) {
             console.error('Error:', error);
           };
         };
         const refreshInterval = 50000;
         fetchData(); 
         setInterval(fetchData, refreshInterval);
       }, []);
   
     return (
       <div className="live-stream-card-container">
          {/* Map over the data and render the live stream cards  */}
         {data.map((item,index) => {
           //if item exists, set variables for channel name, followers, and previousStream titles
           if(item && item.user && item.previous_livestreams[0]){
             channel = item.user.username;
             followerCount = item.followersCount;
             followers = followerCount.toLocaleString("en-US");
             previousStreamTitle = item.previous_livestreams[0].session_title
             pfp = item.user.profile_pic;
            } else {
             previousStreamTitle = "No titles yet.";
           };
           //if channel is live, populate raw viewers variable wiith live concurrent viewer count and previous stream title
           if(item.livestream){
             rawViewers = item.livestream.viewer_count;
             viewerCount = rawViewers.toLocaleString("en-US");
             streamTitle = item.livestream.session_title;
            } else {
              viewerCount = null;
              streamTitle = `${previousStreamTitle}`;
            };
            //if a profile pic does not exist and channel has never gone live, set channel name, followers, previous stream title, and profile pic to default kick avatar.
               if(item.user.profile_pic === null && item.livestream === null ){
                 channel = item.user.username;
                 followerCount = item.followersCount;
                 followers = followerCount.toLocaleString("en-US");
                 previousStreamTitle = "No titles yet.";
                 pfp = kickAvatar;
                }
                //if channel is live, display "Live"
                  isLive = item.livestream === null ? <p id='offline-live'>offline</p> : <p id='online-live'>LIVE</p>;
                  
                  channelLive = !item.livestream ? <h6 id='channel-offline'>{channel}</h6> : <h6 id='channel-online'>{channel}</h6>
                  
                  titleLive = !item.livestream ? <h6 id='title-offline'>{streamTitle}</h6> : <h6 id='title-online'>{streamTitle}</h6> 
                  
                  pfpLive = !item.livestream ? <img id='offline-pfp' src={pfp} alt='channel_pfp'/> : <img id='online-pfp' src={pfp} alt='channel_pfp'/>
                  
                  console.log(`${channel}: ${viewerCount}`) ;
               //jsx returning live stream card
               return(
                        <div key={index} className='live-stream-card'>
                            <div className='channel-pfp-container'>
                             {/* <img  id='channel-pfp' src={pfp} alt='channel_pfp'/> */}
                             {pfpLive}
                            </div>
                          <div  className='live-stream-details-container'>
                            <div className='channel-name-container'>
                              {channelLive}
                            </div> 
                            <div className='followed-by-container'>
                              {followers}
                            </div>
                            <div className="stream-title-container">
                              {titleLive} 
                            </div>
                          </div>
                          <div className="is-live">
                              {isLive}&nbsp;
                          <div className='live-viewers-count-container'>
                            {viewerCount}
                          </div>
                          </div>
                        </div>
                       )
                   })}
           </div>
         );
    };

export default SortedChannels;