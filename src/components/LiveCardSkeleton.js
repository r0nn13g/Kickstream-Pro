import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LiveCardSkeleton = ({ isLoading, pfp, channel, followers, title, viewers }) => {
  return (
    <div className="live-stream-card">
      <div className="pfp">{/* {pfpLive} */}</div>
      <div className="live-stream-details-container">
        <div className="channel-name-container">{/* {channelLive} */}</div>
        <div className="followed-by-container">
          <div id="followers">{/* {followersLive} */}</div>
        </div>
        <div className="stream-title-container">{/* {titleLive}  */}</div>
      </div>
      <div className="is-live">
        {/* {isLive} */}
        <div className="live-viewers-count-container">
          {/* {viewerCount}  */}
        </div>
      </div>
    </div>
  );
}

export default LiveCardSkeleton;
