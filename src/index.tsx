import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { GlobalProvider } from "./Providers/global-provider";
ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
      </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
