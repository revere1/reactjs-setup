// IE 11 Support
import 'core-js';
import 'react-app-polyfill/ie11';
import 'url-search-params-polyfill';
// ReactComponents
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import thunk from 'redux-thunk';
import Amplify from 'aws-amplify';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import MainLoading from './Tools/MainLoading';
import rootReducer from './rootReducer';
import { activeSidebar } from './Common/Actions/action_sidebar';
import { setLocale } from './Common/Actions/action_locale';
import { loginConfig } from './Api';
import {
  setDefaultsforLocalStorage
  // setDefaultRights
} from './Utils/LocalhostUtil';
import UserStore from './Store';
import { setActiveLocation } from './Common/Actions/action_location';

const App = Loadable({
  loader: () => import('./App'),
  loading: () => <MainLoading />
});

addLocaleData([...en, ...de]);

const store = createStore(rootReducer, applyMiddleware(thunk));

if (localStorage.activeSidebar) {
  store.dispatch(activeSidebar(localStorage.activeSidebar));
}

if (localStorage.activeLocale) {
  store.dispatch(setLocale(UserStore.getLocalStorageItem('activeLocale')));
}

if (UserStore.getActiveLocation()) {
  store.dispatch(setActiveLocation(UserStore.getActiveLocation()));
}

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: loginConfig.region,
    userPoolId: loginConfig.userPoolId,
    userPoolWebClientId: loginConfig.userPoolWebClientId,
    identityPoolId: loginConfig.identityPoolId
  }
});

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /192\.168\.\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b\.\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\b/
    )
);

/* Setting userDetails in local Storage for localhost environment */
if (isLocalhost) {
  setDefaultsforLocalStorage();
  // setDefaultRights();
  UserStore.setActiveLocation(1);
}

const getUserConfirmation = (message, callback) => {
  // use "message" as Symbol-based key
  if (message !== 'allow') {
    const dialogTrigger = window[Symbol.for(message)];

    if (dialogTrigger) {
      // pass the callback to delegate
      // to the invoked dialog
      return dialogTrigger(callback);
    }
  } else {
    // Fallback to allowing navigation
    callback(true);
  }
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/test" getUserConfirmation={getUserConfirmation}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
