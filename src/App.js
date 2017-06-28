import React from 'react';
import ReactDOM from "react-dom";
import logo from './temp.png';
import './App.css';

var App = React.createClass({
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
          finibus fermentum a non augue. </p>
        </div>



        <div className="Buttons">
          <button onClick={this.toggleDemos}>Demos</button>
          <button onClick={this.loadResume}>Resume</button>
        </div>

       </div>
      )
  }

});



export default App;
