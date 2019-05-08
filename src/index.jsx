import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';
import App from './components/App';

firebase.initializeApp({
  apiKey: 'AIzaSyAbP114Gp4C6vjcao4z-EyM-qQPZCz6Kk4',
  authDomain: 'reactter-5c962.firebaseapp.com',
  databaseURL: 'https://reactter-5c962.firebaseio.com',
  projectId: 'reactter-5c962',
  storageBucket: 'reactter-5c962.appspot.com',
  messagingSenderId: '1047458888534'
});

render(<App />, document.getElementById('root'));
