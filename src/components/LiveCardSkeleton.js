import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import '../styles/live-card-skeleton-styles.css';
import 'react-loading-skeleton/dist/skeleton.css'

const LiveCardSkeleton = ({props}) => {
  return (
    <div className="live-stream-card-skeleton-container">
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    <div className="live-stream-card">
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ margin: "14px" }}>
     <Skeleton
        circle
        height="40px"
        width="40px"
        containerClassName="avatar-skeleton"
      />
      </div>
    <div>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
    <div className="viewers-skeleton">
    <Skeleton />
    </div>
  </SkeletonTheme>
    </div>
    </div>
  );
}

export default LiveCardSkeleton;