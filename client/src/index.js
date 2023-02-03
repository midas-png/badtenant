import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from './state/globalState';
import AdvertisementStore from './store/AdvertisementStore';
require('dotenv').config();

export const Context = createContext(null);
ReactDOM.render(
  <Context.Provider
    value={{
      user: new GlobalState(),
      advertisement: new AdvertisementStore(),
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root'),
);
