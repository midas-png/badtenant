import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStore from './store/globalStore';
import AdvertisementStore from './store/advertisementStore';
require('dotenv').config();

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      user: new GlobalStore(),
      advertisement: new AdvertisementStore(),
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root'),
);
