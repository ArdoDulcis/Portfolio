import React, { Component } from 'react';
import '../../CSS/page4.css';

export default class Page4 extends Component {
    render() {
        return(
            <section id="contact">
                <h1 className="page-h1">Get Contact</h1>
                <div className="line"></div>
                <div className="page4-main">
                    <div>
                        <i className="fab fa-twitter-square"></i>
                        <p>@xeilp</p>
                    </div>
                    <div>
                        <i className="fab fa-github-square"></i>
                        <p>https://github.com/xeilp91</p>
                    </div>
                    <div>
                        <i className="fab fa-google-plus-square"></i>
                        <p>ardo.dulcis@gmail.com</p>
                    </div>
                </div>
            </section>
        )
    }
};