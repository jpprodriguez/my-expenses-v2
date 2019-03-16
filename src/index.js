import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import config from './config/firebaseConfig';

// import the config from your firebase app
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
