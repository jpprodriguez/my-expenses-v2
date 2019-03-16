import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBMqWqXNAyRiYlaWXj_5irUXs8GTSfj11s',
  authDomain: 'my-expenses-deeae.firebaseapp.com',
  databaseURL: 'https://my-expenses-deeae.firebaseio.com',
  projectId: 'my-expenses-deeae',
  storageBucket: 'my-expenses-deeae.appspot.com',
  messagingSenderId: '953941569853'
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
