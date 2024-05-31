import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './over-write.scss'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <React.Fragment>
      <App /> 
      </React.Fragment>

  // </React.StrictMode>
);
