import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/video-styles.css';

const YTLoader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kick_clipz&type=video&key=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setData(response.data.items);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const youtubeDataArr = data.map((video) => (
        <div key={video.id.videoId} className="video-thumbnail-wrapper">
            <Link to={`/videos/${video.id.videoId}`}>
                <img id="video-thumbnails" src={video.snippet.thumbnails.high.url} alt="youtube thumbnail" />
                <h4 id="video-title">{video.snippet.title}</h4>
                {/* <h4 style={{ color: "var(--green-elements", marginTop:"0px"}} id="video-title">{video.snippet.channelTitle}</h4> */}
            </Link>
        </div>
    ));
    
    return (
        <div>
            <div className="videos">
            <h6 style={{color: "var(--green-elements)", textAlign: "center"}}>Degen news provided by @Kick_Clipz</h6>
                {youtubeDataArr}
            </div>
        </div>
    );
};

export default YTLoader;
