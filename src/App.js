import React, { Component } from 'react';
import logo from './temp.png';
import './App.css';

class App extends Component {
  loadResume() {
    window.open('ScottHamal.pdf', '_blank')
  }
  loadGit() {
    window.open('https://github.com/shamal97', '_blank')
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <div className="Headshot">
            <img src={logo} className="App-logo" alt="logo" />
            </div>

          <p>woooooga ooga ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas et arcu mattis, dictum arcu rutrum, finibus dolor. 
          Nam dapibus gravida ipsum non placerat. Duis at metus a ante 
          finibus fermentum a non augue. </p>
        </div>
        <p className="App-intro">
          dfsdsfgsdf
        </p>

      <div className="Buttons">
        <button>Demos</button>
        <button onClick={this.loadResume}>Resume</button>
        <button onclick={this.loadGit}>GitHub</button>
      </div>

      </div>
    );
  }
}

export default App;
