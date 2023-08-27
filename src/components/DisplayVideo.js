import React from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import '../styles/video-styles.css';

const DisplayVideo = () => {
    const { id } = useParams();
    return (
        <div className="youtube-video">
            <h3 style={{color: "red", textAlign: "center"}}>Youtube</h3>
            <div className="video-container">
                <YouTube id="youtube-video" videoId={id} />
            </div>
        </div>
    );
}

export default DisplayVideo;
