import React from 'react';
// import ReactDOM from "react-dom";
import logo from './temp.png';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
    return { showDemos : false };
  },
  clickDemoButton: function() {
    this.setState({ showDemos : true })
  },
  render: function(){
    return (
      <div className="App">
        <div className="App-header">

          <div className="Headshot">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <p>woooooga oogas ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas et arcu mattis, dictum arcu rutrum, finibus dolor.
          Nam dapibus gravida ipsum non placerat. Duis at metus a ante
          finibus fermentum a non augue.</p>

        </div>
        <div className="Buttons">
          <button onClick={this.clickDemoButton}>Demos</button>
          <button onClick={this.loadResume}>Resume</button>
        </div>

         { this.state.showDemos ? <Demo /> : null }

       </div>
      )
  }

});

var Demo = React.createClass({
  render: function(){
    return(
    <iframe align="right" width="560" height="315" src="https://www.youtube.com/embed/lIAgVkB7Yc4?ecver=1" frameborder="0" allowfullscreen></iframe>
  )}
});



export default App;
