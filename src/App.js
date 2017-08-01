import React from 'react';
// import ReactDOM from "react-dom";
import logo from './me.png';
import Demo from './Demo';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
    return { showDemos : false };
  },
  toggleDemos: function() {
    this.setState({showDemos: !this.state.showDemos})
  },
  loadResume() {
    window.open('ScottHamal.pdf', '_blank')
  },
  loadGithub() {
    window.location.href = 'http://www.github.com/shamal97';
  },
  render: function(){
    return (
      <div className="App">
        <div className="App-header">

          <div className="Headshot">
            <img src={logo} className="App-logo" alt="logo"  />
          </div>

          <p>Hi, I&#39;m Scott. <br/> <br/> I like to make cool things with code.</p>

        </div>
        <div className="Buttons">
          <button onClick={this.loadGithub}>GitHub</button>
          <button onClick={this.loadResume}>Resume</button>
          <button onClick={this.toggleDemos}>Demos</button>
        </div>

        <div className="Demos">
          { this.state.showDemos ? <Demo /> : null }
        </div>
       </div>
      )
  }
});


export default App;
