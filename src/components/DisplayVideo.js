import React from "react";
import '../styles/video-styles.css';
import AdTicker from '../components/AdTicker.js';
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";

const DisplayVideo = () => {
    const { id } = useParams();
    return (
        <>
        <AdTicker />
        <div className="youtube-video">
          <div className="video-container">
            <YouTube id="youtube-video" videoId={id} />
          </div>
            <h3 style={{color: "var(--green-elements", textAlign: "left", margin: "10px"}}>@kick_clipz</h3>
        </div>
        </>
    );
}

export default DisplayVideo;
