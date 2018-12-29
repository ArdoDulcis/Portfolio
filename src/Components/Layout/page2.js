import React, { Component } from 'react';
import '../../CSS/page2.css';


export default class Page2 extends Component {
    render() {
        return(
            <section id="skill">
                <h1 className="page-h1">SKILL</h1>
                <div className="line"></div>
                <div className="card-group">
                    <article className="card">
                        <div>
                            <i className="fab fa-html5"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-js-square"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-react"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-node"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-php"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-laravel"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fas fa-bold"></i>
                        </div>
                        <button className="card-btn">Go</button>
                    </article>
                </div>
                <button className="all-skill-btn">SEE ALL MY SKILL</button>
            </section>
        )
    }
};
