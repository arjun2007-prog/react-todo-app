import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './App';

import  reportWebVitals from "./reportWebVitals"


ReactDOM.render(
  // This stric mode just adds additional checks and warnings it isnt part of the UI
  <React.StrictMode>
  {/* Here we are just calling the navbar function it is diffrent as we need to render the returned elements as  */}
    <Display />
  </React.StrictMode>,
  // This tells where should the particular element be placed in the html file 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
