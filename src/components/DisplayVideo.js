import React from "react";
import '../styles/video-styles.css';
import AdTicker from '../components/AdTicker.js';
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import youtubePlay  from '../assets/youtube.png';

const DisplayVideo = () => {
    const { id } = useParams();
    return (
      <div className="youtube-video-wrapper">
        <AdTicker />
          <div className="youtube-video-container">
            <YouTube id="youtube-video-player" videoId={id} />
          </div>
            <img src= {youtubePlay} alt="youtube_play_button" style={{height: "20px", marginLeft: "10px", marginTop:"20px"}}/>
            <a href="https://www.youtube.com/channel/UCmXAEqNsldIpQWK6M8F156g?themeRefresh=1" target="blank">
            <h3 style={{color: "var(--green-elements", marginBottom: "10px", paddingBottom: "20px"}}>
              @kick_clipz
            </h3>
            </a>
      </div>
    );
};

export default DisplayVideo;
