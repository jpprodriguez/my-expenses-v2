import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import rootReducer from './ducks';
import './index.css';
import App from './App';
import config from './config/firebaseConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

// import the config from your firebase app
firebase.initializeApp(config);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
