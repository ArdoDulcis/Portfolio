import React, { Component } from 'react';
import '../../CSS/page3.css';
import {JS, HTML, CSS, Algorithm, FW} from './page3_form.js';

export default class Page3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            form : <JS/>,
            componentType : "JS"
        }
    }

    shouldComponentUpdate(nextState){
        return this.state.componentType !== nextState.componentType;
    }

    ChangingForm = (e) => {
        let elem = e.target;
        let id = elem.id;
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
                form = <FW/>;
                break;
            case 'Algorithm':
                form = <Algorithm/>;
                break;
            default:
                form = null;
                break;
        }
        document.querySelector(".enabled").className = "disabled";
        elem.className = "enabled";
        this.setState({
            form : form,
            componentType : id
        });
        document.getElementById("form").animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
        });
    };

    render() {
        return (
            <section id="like">
                <h1 className="page-h1">Like</h1>
                <div className="line"></div>
                <div className="page3-main">
                    <div className="btn-group">
                        <button id="JS" className="enabled" onClick={this.ChangingForm}>JavaScript</button>
                        <button id="HTML" className="disabled" onClick={this.ChangingForm}>HTML</button>
                        <button id="CSS" className="disabled" onClick={this.ChangingForm}>CSS</button>
                        <button id="Algorithm" className="disabled" onClick={this.ChangingForm}>Algorithm</button>
                        <button id="FrameWork" className="disabled" onClick={this.ChangingForm}>New JS FrameWork</button>
                    </div>
                    <article id="form">
                        {this.state.form}
                    </article>
                </div>
            </section>
        );
    }
};