import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/style/global.scss";
import "./services/i18/i18next";
import { Provider } from 'react-redux';
import { store } from './reduxToolkit/store'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


