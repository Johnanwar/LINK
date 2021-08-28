import React from 'react';
import './i18n';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import {NewsProvider} from './contexts/NewsState'

ReactDOM.render(
  <NewsProvider>
  <App />
  </NewsProvider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
