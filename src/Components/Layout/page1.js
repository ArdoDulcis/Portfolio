import React, { Component } from 'react';
import '../../CSS/page1.css';

export default class Page1 extends Component {
    render(){
        return(
            <section id="intro">
                <h1 className="page-h1">Who am I??</h1>
                <div className="line"></div>
                <div className="box-group">
                    <article className="box">
                        <div>
                            <i className="fas fa-crown"></i>
                        </div>
                        <h2>Challenger</h2>
                        <p>paragram</p>
                    </article>
                    <article className="box">
                        <div>
                            <i className="fas fa-book"></i>
                        </div>
                        <h2>Learner</h2>
                        <p>paragram</p>
                    </article>
                    <article className="box">
                        <div>
                            <i className="fas fa-comments"></i>
                        </div>
                        <h2>Communicator</h2>
                        <p>paragram</p>
                    </article>
                </div>
            </section>
        )
    };
}