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
  render: function(){
    return (
      <div className="App">
        <div className="App-header">

          <div className="Headshot">
            <img src={logo} className="App-logo" alt="logo"  />
          </div>

          <p>Hi, Im Scott. I like making cool things with code.</p>

        </div>
        <div className="Buttons">
          <button onClick={this.toggleDemos}>Demos</button>
          <button onClick={this.loadResume}>Resume</button>
        </div>

        <div className="Demos">
          { this.state.showDemos ? <Demo /> : null }
        </div>
       </div>
      )
  }
});


export default App;
