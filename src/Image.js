import React, {Component} from 'react';
import './App.css';

class Image extends Component {

    constructor(props){
        super(props);
        this.state = {
            picture: [],
            grayed: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({grayed: !this.state.grayed});
    }

    render() {
        return (
            <div className="Image tile">
                <article className="tile is-child box">
                    <p className="title">Middle tile</p>
                    <figure className="image is-4by3">
                        <img alt="plane" onClick={this.handleClick} src={this.props.src} className={this.state.grayed ? "tiled-images Gray" : "tiled-images "}/>
                    </figure>
                </article>
            </div>
        );
    }
}

export default Image;
