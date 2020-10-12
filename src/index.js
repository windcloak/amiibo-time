import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAyZu_TL6Qb3mJ6tmsqp65PFD4hkTYlSNY",
  authDomain: "amiibo-time.firebaseapp.com",
  databaseURL: "https://amiibo-time.firebaseio.com",
  projectId: "amiibo-time",
  storageBucket: "amiibo-time.appspot.com",
  messagingSenderId: "775850179596",
  appId: "1:775850179596:web:65406c56e1cc86f4878229",
  measurementId: "G-BFF14G8RXN"
});
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
