import React, { Component } from 'react';
import '../../CSS/navigation.css';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll : 0,
            className : "btn-nav",
            NavClassName : ""
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScrollmove)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollmove)
    }

    onScrollmove = () => {
        let wScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (wScroll / height) * 100;
        this.setState({
            scroll : scrolled
        });
        let navbtn = document.querySelector(".btn-nav");
        if(this.state.scroll > 32) {
            navbtn.style.animation = "showNav 0.3s";
            navbtn.style.top = 25 + "px";
        } else if(this.state.scroll < 32  && navbtn.style.animationName === "showNav") {
            navbtn.style.animation = "hiddenNav 0.3s";
            navbtn.style.top = -55 + "px";
            this.setState({
                className : "btn-nav",
                NavClassName : ""
            })
        }
    };
    openNav = (e) => {
        let navbtn = e.target;
        if (navbtn.parentNode.tagName === 'BUTTON') {
            navbtn = navbtn.parentNode;
        }
        if (navbtn.classList.contains("open")) {
            this.setState({
                className : "btn-nav",
                NavClassName : ""
            })
        } else {
            this.setState({
                className : "btn-nav open",
                NavClassName : "active"
            })
        }
    };
    render(){
        const style = {
            width : this.state.scroll + "%"
        };
        return(
            <React.Fragment>
                <div className="progress">
                    <span className="now" style={style}></span>
                </div>
                <button className={this.state.className} onClick={this.openNav}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <nav id="nav" className={this.state.NavClassName}>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#like">Like</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#intro">Intro</a></li>
                </nav>
            </React.Fragment>
        )
    }
};