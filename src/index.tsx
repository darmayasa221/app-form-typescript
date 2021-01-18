import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/Style/Style.css';
// import App from './App';
import { Register } from './component/form/Register/Register';
// import { AggreValidate } from './component/validate/Validate/AggreValidate';

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);
