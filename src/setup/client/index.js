import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider, updateIntl } from 'react-intl-redux';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';

// App Imports
import { store } from '../../setup/store';
import {
  setUser,
  loginSetUserLocalStorageAndCookie
} from '../../modules/user/actions/doUser';
import App from './App';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import translations from '../../modules/i18n/locales';
import 'bootstrap/dist/css/bootstrap.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #FCFCFC;
  }

  body {
    background-color: #f8f8f8;
  }
  
  .navbar {
    box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.2);
    position: fixed;
    background-color: rgba(255, 255, 255, 0.98);
    -webkit-backdrop-filter: blur(20px);
    position: relative;
    z-index: 2;
  }
  
  .navbar-nav li a svg {
    margin-right: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #d2d2d2;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  .container {
    margin-top: 30px;
  }
  
  .show-loading-animation {
    animation: react-placeholder-pulse 1.5s infinite;
  }
  
  @keyframes react-placeholder-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

addLocaleData([...en, ...es]);

// Language
const language = window.localStorage.getItem('rf_language') || 'en';
store.dispatch(
  updateIntl({
    locale: language,
    messages: translations[language]
  })
);

// User Authentication
const token = window.localStorage.getItem('token');
if (token && token !== 'undefined' && token !== '') {
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (user) {
    // Dispatch action
    store.dispatch(setUser(token, user));

    loginSetUserLocalStorageAndCookie(token, user);
  }
}

// Project App
const Project = () => (
  <Provider store={store} key={'provider'}>
    <IntlProvider store={store}>
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </Provider>
);

// Mount project app
window.onload = () => {
  hydrate(<Project />, document.getElementById('app'));
};
