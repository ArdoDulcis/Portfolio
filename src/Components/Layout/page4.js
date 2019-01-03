import React, { Component } from 'react';
import '../../CSS/page4.css';

export default class Page4 extends Component {
    render() {
        return(
            <section id="contact">
                <h1 className="page-h1">Get Contact</h1>
                <div className="line"></div>
                <div className="page4-main">
                    <div className="contact-btn-group">
                        <button><i className="fas fa-arrow-left"></i></button>
                        <button><i className="fas fa-arrow-right"></i></button>
                    </div>
                    <div className="contact-card-group"></div>
                </div>
            </section>
        )
    }
};