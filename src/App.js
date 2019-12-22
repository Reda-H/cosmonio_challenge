import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Box from "./Box";
import Header from './Header';
import SelectedPhoto from "./SelectedPhoto";

let apiKey = 'ef1f9d4f8ca80dada31c684364355282';
let apiSig = 'd7f57fa9e01a6a2d6ccd8597b8d2f86b';
let numberResults = 80;
let tags = "puppy";
let method = "photos.search";


let url = "https://api.flickr.com/services/rest?" +
    "method=flickr." + method +
    "&api_key=" + apiKey +
    "&FLickrApi_sig=" + apiSig +
    "&nojsoncallback=1&format=json" +
    "&tags=" + tags +
    "&page=0"+
    "&per_page=" + numberResults +
    "&content_type=7&extras=owner_name,date_upload";


class App extends Component {

    constructor(){
        super();
        this.state = {
            pictures: [],
            selectedId: '',
            selectedSource: ''
        };
    }

    componentDidMount() {
        axios.get(url)
            .then((response) => {
                return response.data;
            })
            .then((json) => {
                let rowNumber = 0;
                let colNumber = 0;
                let arrayPics = json.photos.photo.map((picture, i) => {
                    const sourcePath = "https://farm" + picture.farm + ".staticflickr.com/" + picture.server + "/" + picture.id + "_" + picture.secret + ".jpg";
                    return(
                        <Box
                            onImageClick={this.handleSelection.bind(this)}
                            secret={picture.secret}
                            id={picture.id}
                            row={i%8 ? rowNumber : ++rowNumber}
                            column={i%8 ? ++colNumber : colNumber=0}
                            key={i}
                            src={sourcePath}
                        />
                    )
                });
                this.setState({pictures: arrayPics});
            })
    };

    handleSelection(event, id, src) {
        event.preventDefault();
        this.setState({
            selectedId: id,
            selectedSource: src
        });
    }


    render() {
        return (
            <div className="App">

                {/*Header component here, contains logo and search bar*/}
                <Header />

                {/*Grid component here contains Box, which contains Photo(s)*/}
                <div className="grid-wrapper">
                    <div className="wrapper">
                        {this.state.pictures}
                    </div>
                </div>

                {/*SelectedPhoto component, contains the selected photo in grayscale, with owner, description and title*/}
                <div className="selected-picture">
                        {this.state.pictures.map((element) => {
                            return (element.props.id === this.state.selectedId ?
                                <SelectedPhoto
                                    id={element.props.id}
                                    source={element.props.src}
                                />
                                :
                                null
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default App;
