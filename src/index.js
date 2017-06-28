import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './Demo'
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Demo />, document.getElementById('dropdown'));
registerServiceWorker();
