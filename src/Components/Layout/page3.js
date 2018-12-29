import React, { Component } from 'react';
import '../../CSS/page3.css';
import {JS, HTML, CSS, Algorithm, FW, FE } from './page3_form.js';

export default class Page3 extends Component {

    state = {
        form : null
    };

    ChangingForm = (e) => {
        let id = e.target.id;
        let form = {};
        switch (id) {
            case 'JS':
                form = <JS/>;
                break;
            case 'HTML':
                form = <HTML/>;
                break;
            case 'CSS':
                form = <CSS/>;
                break;
            case 'FrameWork':
                form = <Algorithm/>;
                break;
            case 'Algorithm':
                form = <FW/>;
                break;
            case 'Front-end':
                form = <FE/>;
                break;
            default:
                form = null;
                break;
        }
        console.log(form);
        this.setState({
            form : form
        });
    };

    render() {
        return (
            <section id="like">
                <h1 className="page-h1">Like</h1>
                <div className="line"></div>
                <div className="page3-main">
                    <div className="btn-group">
                        <button id="JS" className="active" onClick={this.ChangingForm}>JavaScript</button>
                        <button id="HTML" onClick={this.ChangingForm}>HTML</button>
                        <button id="CSS" onClick={this.ChangingForm}>CSS</button>
                        <button id="FrameWork" onClick={this.ChangingForm}>New JS FrameWork</button>
                        <button id="Algorithm" onClick={this.ChangingForm}>Algorithm</button>
                        <button id="Front-end" onClick={this.ChangingForm}>Front-End</button>
                    </div>
                    <article className="Form">
                        {this.state.form}
                    </article>
                </div>
            </section>
        );
    }
};