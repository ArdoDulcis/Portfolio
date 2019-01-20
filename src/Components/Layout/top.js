import React, { Component } from 'react';
import TopImage from '../../static/image/topimg.JPG';
import '../../CSS/top.css';

export default class Top extends Component {
    href = () => {
        window.location.href="https://github.com/ArdoDulcis/Portfolio"
    };
    render() {
        return(
            <section className="top">
                <div className="overlay">
                    <img src={TopImage}/>
                </div>
                <div className="top-header">
                    <h1 className="top-h1">Welcome!<p className="top-p"> My World!</p></h1>
                    <ul className="menu">
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#like">Like</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#intro">Intro</a></li>
                    </ul>
                </div>
                <div className="top-main">
                    <div className="first">ようこそ！</div>
                    <div className="second">
                        <p>私の世界へ！</p>
                    </div>
                </div>
                <button className="top-btn" onClick={this.href}><p><i className="fab fa-github"></i>Github</p></button>
            </section>
        )
    };
}