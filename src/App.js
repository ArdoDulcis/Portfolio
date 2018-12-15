import React, { Component } from 'react';
import Top from './Components/Layout/top.js';
import Page1 from './Components/Layout/page1.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Top/>
          <Page1/>
        </React.Fragment>
    );
  }
}

export default App;
