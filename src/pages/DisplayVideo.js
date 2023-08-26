import { Component } from "react";
import YouTube from 'react-youtube';

class DisplayVideo extends Component{
    constructor() {
        super();
        this.state = {
            id: [],
        }
    }
    render(){
        return(
                <div className="videos">
                <div><YouTube videoId={this.props.match.params.id} opts={{ height: '690', width: '1040' }} /></div>
                </div>
        )
    }
}

export default DisplayVideo;