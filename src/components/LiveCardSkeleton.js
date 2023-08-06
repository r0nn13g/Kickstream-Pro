import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import '../styles/live-card-skeleton-styles.css';
import 'react-loading-skeleton/dist/skeleton.css'

const LiveCardSkeleton = ({ props }) => {
  const numCards = 10; // Change this number to the desired number of cards

  const skeletonCards = Array.from({ length: numCards }, (_, index) => (
    <div key={index} className="live-stream-card">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div style={{ margin: "5px", marginLeft: "10px" }}>
          <Skeleton
            circle
            height="45px"
            width="45px"
            containerClassName="avatar-skeleton"
          />
        </div>
        <div style={{ zIndex: "2", margin: "-6px", marginLeft: "12px" }}>
          <p>
            <Skeleton count={2} />
          </p>
        </div>
        <div className="viewers-skeleton">
          <Skeleton />
        </div>
      </SkeletonTheme>
    </div>
  ));

  return (
    <div className="live-stream-card-skeleton-container">{skeletonCards}</div>
  );
};

export default LiveCardSkeleton;
