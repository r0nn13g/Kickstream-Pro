import React from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';

const DisplayVideo = () => {
    const { id } = useParams();
    return (
        <div className="videos">
            <h3 style={{color: "red", textAlign: "center"}}>Youtube</h3>
            <div className="video-container">
                <YouTube videoId={id} opts={{ height: '200', width: '350'}} />
            </div>
        </div>
    );
}

export default DisplayVideo;
