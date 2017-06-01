import React, { Component } from 'react';
import logo from './temp.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <div className="Headshot">
            <img src={logo} className="App-logo" alt="logo" />
            </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas et arcu mattis, dictum arcu rutrum, finibus dolor. 
          Nam dapibus gravida ipsum non placerat. Duis at metus a ante 
          finibus fermentum a non augue. </p>
        </div>
        <p className="App-intro">
          dfsdsfgsdf
        </p>

      <div className="Buttons">
        <button>Demos</button>
        <button>Resume</button>
        <button>GitHub</button>
      </div>

      </div>
    );
  }
}

export default App;
