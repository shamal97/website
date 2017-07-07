import React from 'react';
import './Demo.css';
var Demo = React.createClass({
  render: function(){
    return(
    <div>
      <iframe align="right" width="560" height="315" src="https://www.youtube.com/embed/lIAgVkB7Yc4?ecver=1" frameborder="0" title="ramp" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/stS1Idb9p8I?ecver=1" frameborder="0" title="pythonHoldem" allowfullscreen></iframe>
    </div>
  )}
});

export default Demo;
