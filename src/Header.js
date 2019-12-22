import React, {Component} from 'react';
import './App.css';
import logo from "./logo.png";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <section className="hero">
                    <div className="hero-body">
                        <div className="grid-header">
                            <img className="logo" src={logo} alt="test"/>
                            <input className="search-bar" type="text" name="searchbar" placeholder="search.." size="70" />
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
