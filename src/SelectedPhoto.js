import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class SelectedPhoto extends Component {
    constructor(props){
        super(props);
        this.state = {
            picture: [],
            grayed: false,
            url: "https://api.flickr.com/services/rest?method=flickr.photos.getInfo&api_key=ef1f9d4f8ca80dada31c684364355282&photo_id=" + this.props.id + "&nojsoncallback=1&format=json",
            owner: '',
            title: '',
            postedDate: ''
        };
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then((response) => {
                return response.data;
            })
            .then((json) => {
                let info = json.photo;
                this.setState({
                    owner: info.owner.username,
                    title: info.title._content,
                    postedDate: info.dates.posted
                });
            });
    }

    render() {
        return (
            <div className="SelectedPhoto wrapper-selection">
                <img src={this.props.source} className="image-selected"  alt="test"/>
                <div className="description-selected-image">
                    <h1 className="title-selected-picture">
                        {this.state.title}
                    </h1>
                    <h3 className="owner-selected-picture">
                        {this.state.owner}
                    </h3>
                    <h5 className="postedDate-selected-picture">
                        {this.state.postedDate}
                    </h5>
                </div>
            </div>
        );
    }
}

export default SelectedPhoto;
