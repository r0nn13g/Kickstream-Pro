import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import '../styles/live-card-skeleton-styles.css';
import 'react-loading-skeleton/dist/skeleton.css'

const LiveCardSkeleton = ({ props }) => {
  const numCards = 20; // Change this number to the desired number of cards

  const skeletonCards = Array.from({ length: numCards }, (_, index) => (
    <div key={index} className="live-stream-card">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div style={{ margin: "4px", textAlign:"center" }}>
          <Skeleton circle height="45px" width="45px"/>
        </div>
        <div style={{ zIndex: "2", marginTop: "6px", marginLeft: "2px", marginRight: "10px", marginBottom: "6px" }}>
          <p style={{ zIndex: "2", margin: "0px", width:"140px", paddingBottom: "4px" }}><Skeleton/></p>
          <p style={{ zIndex: "2",  margin:"0px", marginBottom: "0px", marginRight: "5px"}}><Skeleton/></p>
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
