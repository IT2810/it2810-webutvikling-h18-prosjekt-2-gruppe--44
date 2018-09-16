import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextGetter from './TextGetter'
// import RadioGroup from './RadioGroup'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TextGetter/>, document.getElementById('buson'));
registerServiceWorker();
