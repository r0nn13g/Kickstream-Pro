import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../styles/live-card-styles.css';
import axios from "axios";
import { channels } from "../data/streamers";
import PulsatingDot from './PulsatingDot';
import VideocamOffIcon from '@mui/icons-material/VideocamOffOutlined';
import LiveCardSkeleton from "./LiveCardSkeleton.js"

  let pfp;
  let pfpLive;
  let slug;
  let kickAvatar = 'https://dbxmjjzl5pc1g.cloudfront.net/d1d6906c-00fe-4aac-9ae8-be0f3a2826ab/images/user-profile-pic.png';
  let isLive;
  let isVerified;
  let verified;
  let verifiedBadge = 'https://i.imgur.com/quUBzZJ.png';
  let verifiedLive;
  let channel;
  let channelLive;
  let followers;
  let followerCount;
  let followersLive;
  let rawViewers;
  let viewerCount;
  let titleLive;
  let streamTitle;
  let previousStreamTitle;

     const Trending = () => {
     // State to store the sorted data
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const responses = await Promise.all(
             channels.map((url) => axios.get(url))
           );
           const responseData = responses.map((urls) => urls.data);
           const validResponses = responseData.filter(
             (response) => response.status !== null
           );

           const onlineStreamers = validResponses.filter(
             (response) =>
               response.livestream && response.livestream.viewer_count >= 0
           );
           const offlineStreamers = validResponses.filter(
             (response) => response.livestream === null
           );

           const sortedOnlineStreamers = onlineStreamers.sort(
             (a, b) => b.livestream.viewer_count - a.livestream.viewer_count
           );
           const streamerWithZeroViewers = sortedOnlineStreamers.find(
             (streamer) => streamer.livestream.viewer_count === 0
           );

           setData(
             streamerWithZeroViewers
               ? [...sortedOnlineStreamers, ...offlineStreamers]
               : [...onlineStreamers, ...offlineStreamers]
           );
           setIsLoading(false);
         } catch (error) {
           // Ignore 404 response and return null for this URL
           if (error.response) {
             console.error("Banned channel in streamers Array", error);
             console.log(error.response.data);
             console.log(error.response.status);
             console.log(error.response.headers);
             setIsLoading(true);
           } else if (error.request) {
             // console.error("Too many requests. Please wait and try again later.", error);
             console.log(error.request);
           } else {
             console.log("Error", error.message);
             // throw error; // Throw other errors
           }
           console.log(error.config);
         }
       };

       const refreshInterval = 50000;
       fetchData();
       setInterval(fetchData, refreshInterval);
     }, []);

        return (
            <div className="live-stream-card-container">
                    {/* display rotating spinner until get requests are succesful */}
                    {isLoading ? (
                      // <RotatingSpinner />
                      <LiveCardSkeleton />
                      ) : (
                        <>
                      {data.map((item,index) => {
                        console.log(item)
                          //if verified object exists than a channel is verified and the verified variable is set to true
                          if(item.verified !== null){
                            verified = true;
                          } else {
                            verified = false;
                          }
                          //if item exists, set variables for channel name, followers, and previousStream titles
                          if(item && item.user && item.previous_livestreams[0]){
                            pfp = item.user.profile_pic;
                            channel = item.user.username;
                            followerCount = item.followersCount;
                            followers = followerCount.toLocaleString("en-US");
                            previousStreamTitle = item.previous_livestreams[0].session_title
                            slug = item.slug;
                          } else {
                            pfp = item.user.profile_pic;
                            channel = item.user.username;
                            followerCount = item.followersCount;
                            followers = followerCount.toLocaleString("en-US");
                            previousStreamTitle = "No titles yet.";
                            slug = item.slug;
                          };
                          //if channel is live, populate raw viewers, followers, slug and stream title, else if channel is offline set stream title to the last stream title used by channel
                          if(item.livestream){
                            pfp = item.user.profile_pic;
                            channel = item.user.username;
                            console.log("Live:", channel)
                            followerCount = item.followersCount;
                            followers = followerCount.toLocaleString("en-US");
                            rawViewers = item.livestream.viewer_count;
                            viewerCount = rawViewers.toLocaleString("en-US");
                            streamTitle = item.livestream.session_title;
                            slug = item.slug;
                          } else {
                            viewerCount = null;
                            streamTitle = `${previousStreamTitle}`;
                          };
                          //if a profile pic does not exist and channel has never gone live, set channel name, followers, previous stream title, and profile pic to default kick avatar.
                          if(item.user.profile_pic === null && !item.livestream ){
                            pfp = kickAvatar;
                          } 
                          //if a profile pic does not exist and channel goes live, set the profile pic to default kick avatar
                          if(item.user.profile_pic === null && item.livestream ){
                            pfp = kickAvatar
                          }
                         //if channel is live, display Pulsating dot
                        isLive = item.livestream === null ? <div id='offline-live'><VideocamOffIcon/></div> : <div id='online-live'><PulsatingDot /></div>; 
                        //if channel is partnered with kick display verified badge next to name
                        isVerified = verified === true ? <img id='verified-badge-online' src={verifiedBadge} alt='verification-badge'/> : null ;
                        //if channel is partnered with kick and offline display verified badge with gray scale filter
                        verifiedLive = isVerified !== null && !item.livestream ? <img id='verified-badge-offline' src={verifiedBadge} alt='verification-badge'/> : isVerified;
                        //if channel is live display elements in color, else display in gray scale.
                        channelLive = !item.livestream ? <h6 id='channel-offline'>{channel}{verifiedLive}</h6> : <h6 id='channel-online'>{channel}{isVerified}</h6>;
                        titleLive = !item.livestream ? <h6 id='title-offline'>{streamTitle}</h6> : <h6 id='title-online'>{streamTitle}</h6>;
                        pfpLive = !item.livestream ? <img id='offline-pfp' src={pfp} alt='channel_pfp'/> : <img id='online-pfp' src={pfp} alt='channel_pfp'/>;
                        followersLive = item.livestream === null ? <p id='followers-offline'>{followers} followers</p> : <p id='followers-online'>{followers} followers</p>;      
                        //jsx returning live stream card
                        return (
                          <div key={index} className="live-stream-card">
                            <Link
                              className="channel-pfp-container"
                              to={`https://www.kick.com/${slug}`}
                              target="_blank"
                              path="relative"
                              style={{ textDecoration: "none" }}
                            >
                              <div className="pfp">{pfpLive}</div>
                            </Link>
                            <div className="live-stream-details-container">
                              <div className="channel-name-container">
                                {channelLive}
                              </div>
                              <div className="followed-by-container">
                                <div id="followers">{followersLive}</div>
                              </div>
                              <Link
                                to={`https://www.kick.com/${slug}/chatroom`}
                                target="_blank"
                                path="relative"
                                style={{ textDecoration: "none" }}
                              >
                                <div className="stream-title-container">
                                  {titleLive}
                                </div>
                              </Link>
                            </div>
                            <div className="is-live">
                              {isLive}
                              <Link
                                to={`https://www.kick.com/${slug}/chatroom`}
                                target="_blank"
                                path="relative"
                                style={{ textDecoration: "none" }}
                              >
                                <div className="live-viewers-count-container">
                                  {viewerCount}
                                </div>
                              </Link>
                            </div>
                          </div>
                        );
                        })
                      }
                    </>
                  )}
           </div>
        );
    };
export default Trending;
