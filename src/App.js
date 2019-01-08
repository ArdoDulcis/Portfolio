import React, { Component } from 'react';
import Navigation from './Components/Layout/navigation.js';
import Top from './Components/Layout/top.js';
import Page1 from './Components/Layout/page1.js';
import Page2 from './Components/Layout/page2.js';
import Page3 from './Components/Layout/page3.js';
import Page4 from './Components/Layout/page4.js';

class App extends Component {
    render() {
    return (
        <React.Fragment>
            <Navigation/>
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
