import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename="/portfolio-yussuf">
    <App />
  </Router>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
