import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/GobleStyle'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


