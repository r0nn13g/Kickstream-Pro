import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../styles/trending-styles.css';
import axios from "axios";
import { streamers } from "../data/Streamers";
import PulsatingDot from './PulsatingDot';
import VideocamOffIcon from '@mui/icons-material/VideocamOffOutlined';
import BasicAccordion from "./BasicAccordian.js.js";
import LiveCardSkeleton from "./LiveCardSkeleton.js"

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

  const Live = () => {
    const [isLoading, setLoading] = useState(true);
    const [showLive, setShowLive] = useState(true); // State variable to track mode (live or offline)
    const [onlineStreamers, setOnlineStreamers] = useState([]);
    const [offlineStreamers, setOfflineStreamers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const responses = await Promise.all(
            streamers.map((url) => axios.get(url))
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

          setOnlineStreamers(sortedOnlineStreamers);
          setOfflineStreamers(offlineStreamers);
          setLoading(false);
        } catch (error) {
          // Ignore 404 response and return null for this URL
          if (error.response) {
            console.error("Banned channel in streamers Array", error);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            setLoading(true);
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

    // Function to toggle between live and offline
    const toggleLiveOffline = () => {
      setShowLive((prevMode) => !prevMode);
    };

    return (
      <div className="live-stream-card-container">
        <BasicAccordion />
        <div className="offline-online-switch-container">
        <button id="online-offline-switch" onClick={toggleLiveOffline}>
          {showLive ? "Online" : "Offline"}
        </button>
        </div>
        {isLoading ? (
          <LiveCardSkeleton />
        ) : (
          <>
            {showLive ? (
              // Display online streamers
              <>
                {onlineStreamers.map((item, index) => {
                  // if verified object exists than a channel is verified and the verified variable is set to true
                  verified = item.verified !== null;

                  // if item exists, set variables for channel name, followers, and previousStream titles
                  pfp = item.user.profile_pic || kickAvatar;
                  channel = item.user.username;
                  followerCount = item.followersCount;
                  followers = followerCount.toLocaleString("en-US");
                  previousStreamTitle = item.previous_livestreams[0]
                    ? item.previous_livestreams[0].session_title
                    : "No titles yet.";
                  slug = item.slug;

                  // if channel is live, populate raw viewers, followers, slug and stream title, else if channel is offline set stream title to the last stream title used by channel
                  rawViewers = item.livestream
                    ? item.livestream.viewer_count
                    : null;
                  viewerCount = rawViewers
                    ? rawViewers.toLocaleString("en-US")
                    : null;
                  streamTitle = item.livestream
                    ? item.livestream.session_title
                    : previousStreamTitle;

                  // if a profile pic does not exist and channel has never gone live, set channel name, followers, previous stream title, and profile pic to default kick avatar.
                  pfpLive = item.livestream ? (
                    <img id="online-pfp" src={pfp} alt="channel_pfp" />
                  ) : (
                    <img id="offline-pfp" src={pfp} alt="channel_pfp" />
                  );

                  // if channel is live, display Pulsating dot
                  isLive = item.livestream ? (
                    <div id="online-live">
                      <PulsatingDot />
                    </div>
                  ) : (
                    <div id="offline-live">
                      <VideocamOffIcon />
                    </div>
                  );

                  // if channel is partnered with kick display verified badge next to name
                  isVerified = verified ? (
                    <img
                      id="verified-badge-online"
                      src={verifiedBadge}
                      alt="verification-badge"
                    />
                  ) : null;

                  // if channel is partnered with kick and offline display verified badge with gray scale filter
                  verifiedLive =
                    !item.livestream && isVerified ? (
                      <img
                        id="verified-badge-offline"
                        src={verifiedBadge}
                        alt="verification-badge"
                      />
                    ) : (
                      isVerified
                    );

                  // if channel is live display elements in color, else display in gray scale.
                  channelLive = item.livestream ? (
                    <h6 id="channel-online">
                      {channel}
                      {isVerified}
                    </h6>
                  ) : (
                    <h6 id="channel-offline">
                      {channel}
                      {verifiedLive}
                    </h6>
                  );

                  titleLive = item.livestream ? (
                    <h6 id="title-online">{streamTitle}</h6>
                  ) : (
                    <h6 id="title-offline">{streamTitle}</h6>
                  );

                  followersLive = item.livestream ? (
                    <p id="followers-online">{followers} followers</p>
                  ) : (
                    <p id="followers-offline">{followers} followers</p>
                  );

                  // JSX returning live stream card
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
                })}
              </>
            ) : (
              // Display offline streamers
              <>
                {offlineStreamers.map((item, index) => {
                  // if verified object exists than a channel is verified and the verified variable is set to true
                  verified = item.verified !== null;

                  // if item exists, set variables for channel name, followers, and previousStream titles
                  pfp = item.user.profile_pic || kickAvatar;
                  channel = item.user.username;
                  followerCount = item.followersCount;
                  followers = followerCount.toLocaleString("en-US");
                  previousStreamTitle = item.previous_livestreams[0]
                    ? item.previous_livestreams[0].session_title
                    : "No titles yet.";
                  slug = item.slug;

                  // if channel is live, populate raw viewers, followers, slug and stream title, else if channel is offline set stream title to the last stream title used by channel
                  rawViewers = item.livestream
                    ? item.livestream.viewer_count
                    : null;
                  viewerCount = rawViewers
                    ? rawViewers.toLocaleString("en-US")
                    : null;
                  streamTitle = item.livestream
                    ? item.livestream.session_title
                    : previousStreamTitle;

                  // if a profile pic does not exist and channel has never gone live, set channel name, followers, previous stream title, and profile pic to default kick avatar.
                  pfpLive = item.livestream ? (
                    <img id="online-pfp" src={pfp} alt="channel_pfp" />
                  ) : (
                    <img id="offline-pfp" src={pfp} alt="channel_pfp" />
                  );

                  // if channel is live, display Pulsating dot
                  isLive = item.livestream ? (
                    <div id="online-live">
                      <PulsatingDot />
                    </div>
                  ) : (
                    <div id="offline-live">
                      <VideocamOffIcon />
                    </div>
                  );

                  // if channel is partnered with kick display verified badge next to name
                  isVerified = verified ? (
                    <img
                      id="verified-badge-online"
                      src={verifiedBadge}
                      alt="verification-badge"
                    />
                  ) : null;

                  // if channel is partnered with kick and offline display verified badge with gray scale filter
                  verifiedLive =
                    !item.livestream && isVerified ? (
                      <img
                        id="verified-badge-offline"
                        src={verifiedBadge}
                        alt="verification-badge"
                      />
                    ) : (
                      isVerified
                    );

                  // if channel is live display elements in color, else display in gray scale.
                  channelLive = item.livestream ? (
                    <h6 id="channel-online">
                      {channel}
                      {isVerified}
                    </h6>
                  ) : (
                    <h6 id="channel-offline">
                      {channel}
                      {verifiedLive}
                    </h6>
                  );

                  titleLive = item.livestream ? (
                    <h6 id="title-online">{streamTitle}</h6>
                  ) : (
                    <h6 id="title-offline">{streamTitle}</h6>
                  );

                  followersLive = item.livestream ? (
                    <p id="followers-online">{followers} followers</p>
                  ) : (
                    <p id="followers-offline">{followers} followers</p>
                  );

                  // JSX returning live stream card
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
                })}
              </>
            )}
          </>
        )}
      </div>
    );
  };
  
  export default Live;