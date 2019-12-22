import React, {Component} from 'react';
import './App.css';

class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            picture: [],
            grayed: false,
            url: "https://api.flickr.com/services/rest?method=flickr.photos.getInfo&api_key=ef1f9d4f8ca80dada31c684364355282&photo_id=" + this.props.id + "&nojsoncallback=1&format=json"
        };
    }

    render() {
        return (
            <div className="Photo">
                <img src={this.props.source} className="image-jpg image-10"  alt="test"/>
            </div>
        );
    }
}

export default Photo;
