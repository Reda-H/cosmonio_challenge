import React, {Component} from 'react';
import './App.css';

class BottomBox extends Component {


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
            <div className="BottomBox button-container columns">
                <span className="box-text column">{this.props.id}</span>
                <input id="toggle-heart" type="checkbox"/>
                <label htmlFor="toggle-heart">❤</label>
            </div>
        );
    }
}

export default BottomBox;
