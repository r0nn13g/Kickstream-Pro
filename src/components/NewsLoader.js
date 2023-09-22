import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/video-styles.css';

const NewsLoader = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=potatojet&type=video&key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
                setData(response.data.items);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const youtubeDataArr = data.map((video) => (
        <div key={video.id.videoId} className="youtube-thumbnail-wrapper">
            <Link className='youtube-thumbnail-container' to={`/videos/${video.id.videoId}`}>
                <img id="youtube-thumbnails" src={video.snippet.thumbnails.medium.url} alt="youtube thumbnail" />
                <h4 id="youtube-thumbnail-title">{video.snippet.title}</h4>
            </Link>
        </div>
    ));
  return(
    <div>
         <h6 style={{color: "var(--green-elements)", backgroundColor: "rgb(40, 40, 40)", fontWeight: "900", textAlign: "center", margin: "0px"}}>News provided by @PotatoJet</h6>
            <div className="videos">
                {youtubeDataArr}
            </div>
    </div>
  )
}

export default NewsLoader;