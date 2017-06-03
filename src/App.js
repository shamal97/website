import React, { Component } from 'react';
import logo from './temp.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {showDemos: false};
  }

  toggleDemos = () => {
    this.setState({showDemos: true});
  }

  loadResume() {
    window.open('ScottHamal.pdf', '_blank')
  }



  render() {
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
        <p className="App-intro">
          dfsdsfgsdf
        </p>

      <div className="Buttons">
        <button onClick={this.toggleDemos}>Demos</button>
        <button onClick={this.loadResume}>Resume</button>
      </div>

      <div className="Demos">


      </div>


      </div>
    );
  }
}





export default App;
// export default Demos