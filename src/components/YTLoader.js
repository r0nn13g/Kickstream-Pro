import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/video-styles.css'

class Home extends Component{
    constructor() {
        super();
        this.state = {
            searchStr: "",
            data: []
        }
    }

    handleResult = (e) => {
        e.preventDefault();
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchStr}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then((ytData) => {
            this.setState({
                data: ytData.items
            })
            console.log(this.state.data); 
            if(this.state.searchStr){
                this.setState({
                    searchStr: "",
                })
            }
            
        });
    }

    handleSearch = (e) => {     
        this.setState({
            searchStr: e.target.value,
        })
        console.log(this.state.searchStr);
    }
    render(){
        let youtubeDataArr = this.state.data.map((video) =>{
            return(
                
                    <div key={video.id.videoId} className ="video-thumbnails">
                        <Link to={ "videos/" + video.id.videoId}>
                        <img src={video.snippet.thumbnails.high.url} alt="youtube thumbnail" />
                        <br />
                        <h4>{video.snippet.title}</h4>
                        </Link>
                    </div>
            ) 
        });
        return(
            <div>
                <form onSubmit={this.handleResult} id="search-bar">
                    <input type="text" id="text-input" onChange={this.handleSearch} value={this.state.searchStr} />
                    <button type="submit" id="search-button"><strong>Search</strong></button>
                </form>
                <div className="video-thumbnails">
                            { youtubeDataArr }                         
                </div>
            </div>
        )
    }
  };

  export default Home;