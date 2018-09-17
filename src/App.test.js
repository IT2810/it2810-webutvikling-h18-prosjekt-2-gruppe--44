import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TextGetter from './TextGetter'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<TextGetter/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
