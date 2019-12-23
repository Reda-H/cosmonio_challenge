import React, {Component} from 'react';
import './App.css';
import logo from "./logo.png";

class Header extends Component {
    constructor(props){
        super(props);
    }

    onSearchClick(e, id, src){
        this.props.onSearchClick(e, id, src);
    }

    render() {
        return (
            <div className="Header">
                <section className="hero">
                    <div className="hero-body">
                        <div className="grid-header">
                            <div></div>
                            <img className="logo" src={logo} alt="test"/>
                            <input
                                className="search-bar"
                                type="text"
                                name="searchbar"
                                placeholder="search.." size="70" id="searchBar"/>
                            <button
                                className="search-button"
                                onClick={(e) => {this.onSearchClick(e, document.getElementById("searchBar").valueOf().value)}}
                            >
                                Search
                            </button>
                            <div className="null">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Header;
