import React, {Component} from 'react';
import './App.css';
import Photo from './Photo';
import BottomBox from "./BottomBox";

class Box extends Component {


    constructor(props){
        super(props);
        this.state = {
            picture: this.props.src,
            id: this.props.id,
            secret: this.props.secret,
            row: this.props.row,
            column: this.props.column,
            grayed: false
        };
    }

    onImageClick(e, id, src){
        this.props.onImageClick(e, id, src);
    }

    render() {
        return (
            <div className="Box" onClick={(e) => {this.onImageClick(e, this.state.id, this.props.src)}}>

                <Photo
                    id={this.state.id}
                    source={this.state.picture}
                />

                <BottomBox
                    id={this.state.id}
                />

            </div>
        );
    }
}

export default Box;
