import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/video-styles.css';

const YTLoader = () => {
    const [searchStr, setSearchStr] = useState("");
    const [data, setData] = useState([]);

    const handleResult = (e) => {
        e.preventDefault();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchStr}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then((ytData) => {
            setData(ytData.items);
            if (searchStr) {
                setSearchStr("");
            }
        });
    }

    const handleSearch = (e) => {
        setSearchStr(e.target.value);
    }

    const youtubeDataArr = data.map((video) => (
        <div key={video.id.videoId} className="video-thumbnail-wrapper">
            <Link to={"videos/" + video.id.videoId}>
                <img id="video-thumbnails" src={video.snippet.thumbnails.high.url} alt="youtube thumbnail" />
                <br />
                <h4>{video.snippet.title}</h4>
            </Link>
        </div>
    ));

    return (
        <div>
            <form onSubmit={handleResult} id="search-bar">
                <input type="text" id="text-input" onChange={handleSearch} value={searchStr} />
                <button type="submit" id="search-button"><strong>Search</strong></button>
            </form>
            <div className="videos">
                {youtubeDataArr}
            </div>
        </div>
    );
};

export default YTLoader;
