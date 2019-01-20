import React, { Component } from 'react';
import '../../CSS/page2.css';


export default class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HTML : "View Percent",
            HTML_animation : "circle",
            CSS : "View Percent",
            CSS_animation : "circle",
            JS : "View Percent",
            JS_animation : "circle",
            React : "View Percent",
            React_animation : "circle",
            Node : "View Percent",
            Node_animation : "circle",
            PHP : "View Percent",
            PHP_animation : "circle",
            Laravel : "View Percent",
            Laravel_animation : "circle",
            BootStrap : "View Percent",
            BootStrap_animation : "circle",
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        switch (value) {
            case "html":
                this.setState({
                    HTML: "80%" ,
                    HTML_animation : "circle animation"
                });
                break;
            case "css":
                this.setState({
                    CSS: "70%",
                    CSS_animation : "circle animation"
                });
                break;
            case "js":
                this.setState({
                    JS: "85%",
                    JS_animation : "circle animation"
                });
                break;
            case "react":
                this.setState({
                    React: "60%",
                    React_animation : "circle animation"
                });
                break;
            case "node":
                this.setState({
                    Node: "30%",
                    Node_animation : "circle animation"
                });
                break;
            case "php":
                this.setState({
                    PHP: "80%",
                    PHP_animation : "circle animation"
                });
                break;
            case "laravel":
                this.setState({
                    Laravel: "50%",
                    Laravel_animation : "circle animation"
                });
                break;
            case "bootstrap":
                this.setState({
                    BootStrap: "85%",
                    BootStrap_animation : "circle animation"
                });
                break;
            case "all":
                this.setState({
                    HTML: "80%",
                    HTML_animation : "circle animation",
                    CSS: "70%",
                    CSS_animation : "circle animation",
                    JS: "85%",
                    JS_animation : "circle animation",
                    React: "60%",
                    React_animation : "circle animation",
                    Node: "30%",
                    Node_animation : "circle animation",
                    PHP: "80%",
                    PHP_animation : "circle animation",
                    Laravel: "50%",
                    Laravel_animation : "circle animation",
                    BootStrap: "85%",
                    BootStrap_animation : "circle animation",
                });
                break;
        }
    };

    render() {
        return(
            <section id="skill">
                <h1 className="page-h1">SKILL</h1>
                <div className="line"></div>
                <div className="card-group">
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon">
                                <i className="fab fa-html5"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.HTML_animation}
                                      strokeDasharray="80, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>HTML</h1>
                        <button className="card-btn" onClick={this.handleChange} value="html">{this.state.HTML}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon">
                                <i className="fab fa-css3-alt"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.CSS_animation}
                                      strokeDasharray="70, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>CSS</h1>
                        <button className="card-btn" onClick={this.handleChange} value="css">{this.state.CSS}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon ">
                                <i className="fab fa-js-square"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.JS_animation}
                                      strokeDasharray="85, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>JavaScript</h1>
                        <button className="card-btn" onClick={this.handleChange} value="js">{this.state.JS}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon react">
                                <i className="fab fa-react"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.React_animation}
                                      strokeDasharray="60, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>React.js</h1>
                        <button className="card-btn" onClick={this.handleChange} value="react">{this.state.React}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon node">
                                <i className="fab fa-node"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.Node_animation}
                                      strokeDasharray="30, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>node.js</h1>
                        <button className="card-btn" onClick={this.handleChange} value="node">{this.state.Node}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon php">
                                <i className="fab fa-php"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.PHP_animation}
                                      strokeDasharray="80, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>PHP</h1>
                        <button className="card-btn" onClick={this.handleChange} value="php">{this.state.PHP}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon laravel">
                                <i className="fab fa-laravel"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.Laravel_animation}
                                      strokeDasharray="50, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>Laravel</h1>
                        <button className="card-btn" onClick={this.handleChange} value="laravel">{this.state.Laravel}</button>
                    </article>
                    <article className="card">
                        <div className="single-chart">
                            <div className="icon">
                                <i className="fas fa-bold"></i>
                            </div>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                                <path className="circle-bg"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className={this.state.BootStrap_animation}
                                      strokeDasharray="85, 100"
                                      d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        </div>
                        <h1>BootStrap4</h1>
                        <button className="card-btn" onClick={this.handleChange} value="bootstrap">{this.state.BootStrap}</button>
                    </article>
                </div>
                <button className="all-skill-btn" onClick={this.handleChange} value="all">SEE ALL MY SKILL</button>
            </section>
        )
    }
};
