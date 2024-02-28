import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
Here the "<App />" component is randered by the ReactDom at the root position.
All of the app component is randered to the browser. 
*/ 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
