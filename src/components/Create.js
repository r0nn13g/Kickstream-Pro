import {React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/channel-styles.css';
import axios from "axios";
import PulsatingDot from './PulsatingDot';
import VideocamOffIcon from '@mui/icons-material/VideocamOffOutlined';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CancelIcon from '@mui/icons-material/Cancel';

let pfp;
let pfpLive;
let slug;
let kickAvatar = 'https://dbxmjjzl5pc1g.cloudfront.net/3b83fba0-3fe7-4538-ae3f-3e95592706ec/images/user-profile-pic.png';
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

const Create = () => {
  const [data, setData] = useState([]);
  const [streamerName, setStreamerName] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const responseData = response.data;
      console.log(responseData);

      setData((prevData) => {
        // Check if there's more than one slug in the data array
        if (prevData.length > 0) {
          const combinedData = [...prevData, responseData];
          const sortedData = combinedData.sort((a, b) => {
            return (b?.livestream?.viewer_count || 0) - (a?.livestream?.viewer_count || 0);
          });
          return sortedData;
        } else {
          // If only one slug, return responseData as an array
          return [responseData];
        }
      });
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate the slug from the streamerName
    const slug = streamerName.toLowerCase().replace(/\s/g, "");
    let url = `https://kick.com/api/v1/channels/${slug}`;

    // Make axios request for the current streamer
    fetchData(url);

    // Clear the input field after submitting
    setStreamerName("");
  };
  
  const deleteUrlFromLocalStorage = (slug) => {
    // Find the index of the item with the given slug and remove it from the data array
    const indexToDelete = data.findIndex((item) => item.slug === slug);
    if (indexToDelete !== -1) {
      const updatedData = [...data];
      updatedData.splice(indexToDelete, 1);
      setData(updatedData);
  
      // Save updated data to local storage after removing the streamer
      localStorage.setItem("streamData", JSON.stringify(updatedData));
    }
  };

  useEffect(() => {
    // Fetch initial data from local storage (if available)
    const storedData = localStorage.getItem("streamData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      // If no data in local storage, fetch initial data
      fetchData();
    }

    // Set up the interval to refresh the API every 1 minute (60000 milliseconds)
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    // Clean up the interval on component unmount to avoid memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  // Save data to local storage whenever it changes
  useEffect(() => {
    // Store the latest data in local storage
    localStorage.setItem("streamData", JSON.stringify(data));
  }, [data]);

        return (
          <div className="create">
             <h5 id="create-header">Create a personalized watch list</h5>
            <div className="create-input-container">
              <form onSubmit={handleSubmit}>
                <Box
                className='box'
                  component="div"
                  sx={{ "& > :not(style)": { m: 1, width: "36ch"}, color: 'var(--green-elements)'  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                  color="success" focused
                  sx={{ input: { color: 'var(--green-elements)' } }}
                    className="textfield"
                    id="outlined-basic"
                    label="add channel"
                    variant="outlined"
                    value={streamerName}
                    onChange={(e) => setStreamerName(e.target.value)}
                    inputProps={{ style: { color: 'white'} }}
                  />
                </Box>
              </form>
        </div>
                      {data.map((item,index) => {
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
                          if(!item.user.profile_pic && !item.livestream ){
                            pfp = kickAvatar;
                          };
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
                        followersLive = item.livestream === null ? <p id='followers-offline'>{followers}</p> : <p id='followers-online'>{followers}</p>;      
                        //jsx returning live stream card
                        return(
                          <div key={index} className='live-stream-card'>
                              <Link className='channel-pfp-container' to={`https://www.kick.com/${slug}`} target="_blank" path='relative' style={{textDecoration: 'none'}} >
                                <div className="pfp">
                                  {pfpLive}
                                </div>
                              </Link>
                                <div  className='live-stream-details-container'>
                                  <div className='channel-name-container'>
                                    {channelLive}
                                  </div> 
                                  <div className='followed-by-container'>
                                    <div id='followers'>
                                      {followersLive}
                                    </div>
                                  </div>
                                  <Link to={`https://www.kick.com/${slug}/chatroom`} target="_blank" path='relative' style={{textDecoration: 'none'}} >
                                  <div className="stream-title-container">
                                    {titleLive} 
                                  </div>
                                  </Link>
                                  </div>
                                  <div className="is-live">
                                      {isLive}
                                    <Link to={`https://www.kick.com/${slug}/chatroom`} target="_blank" path='relative' style={{textDecoration: 'none'}} >
                                    <div className='live-viewers-count-container'>
                                      {viewerCount} 
                                    </div>
                                </Link>
                                  <CancelIcon key={index} id="delete-from-list" onClick={() => deleteUrlFromLocalStorage(item.slug)}/>
                            </div>
                      </div>   
                  )
              })
          }
    </div>
  );
};

export default Create;
