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
                        <h1>HTML</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <h1>CSS</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-js-square"></i>
                        </div>
                        <h1>JavaScript</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-react"></i>
                        </div>
                        <h1>React.js</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-node"></i>
                        </div>
                        <h1>node.js</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-php"></i>
                        </div>
                        <h1>PHP</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fab fa-laravel"></i>
                        </div>
                        <h1>Laravel</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                    <article className="card">
                        <div>
                            <i className="fas fa-bold"></i>
                        </div>
                        <h1>BootStrap4</h1>
                        <button className="card-btn">View Percent</button>
                    </article>
                </div>
                <button className="all-skill-btn">SEE ALL MY SKILL</button>
            </section>
        )
    }
};
