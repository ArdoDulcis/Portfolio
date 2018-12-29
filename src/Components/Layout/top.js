import React, { Component } from 'react';
import '../../CSS/top.css';

export default class Top extends Component {
    render() {
        return(
            <section className="top">
                <div className="top-header">
                    <h1 className="top-h1">Welcome!<p className="top-p"> My World!</p></h1>
                    <nav className="nav">
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#like">Like</a></li>
                        <li><a href="#skill">Skill</a></li>
                        <li><a href="#intro">Intro</a></li>
                    </nav>
                </div>
                <div className="top-main">
                    <div className="first">TEST</div>
                    <div className="second">
                        <p>TEST@</p>
                    </div>
                    <div className="first-name">TEST</div>
                    <div className="first-name-all">
                        <p>TEST@</p>
                    </div>
                </div>
                <button className="top-btn"><p><i className="fab fa-github"></i>Github</p></button>
            </section>
        )
    };
}