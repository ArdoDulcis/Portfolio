import React, { Component } from 'react';
import Top from './Components/Layout/top.js';
import Page1 from './Components/Layout/page1.js';
import Page2 from './Components/Layout/page2.js';
import Page3 from './Components/Layout/page3.js';
import Page4 from './Components/Layout/page4.js';
import './App.css';

class App extends Component {

    state = {
        scroll : 0
    };

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
        })
    };
    render() {
        const style = {
            width: this.state.scroll + '%'
        };
    return (
        <React.Fragment>
            <div className="progress">
                <span className="now" style={style}></span>
            </div>
            <Top/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
        </React.Fragment>
    );
  }
}

export default App;
