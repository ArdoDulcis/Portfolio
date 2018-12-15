import React, { Component } from 'react';
import '../../CSS/page1.css';


export default class Page1 extends Component {
    render() {
        return(
            <section className="page1">
                <h1 className="page1-h1">Introduce</h1>
                <div className="line"></div>
                <div className="card-group">
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                    <article className="card">
                        <button className="page1-btn">Go</button>
                    </article>
                </div>
            </section>
        )
    };
}