import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalStyle} from "./GlobalStyle";
import Context from "./context/Context";
ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle/>
      <Context>
          <App />
      </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

