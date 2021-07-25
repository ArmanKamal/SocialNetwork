import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firbase'
import { FieldValue,firebase } from './lib/firebase';
import './styles/tailwind.css'


ReactDOM.render(
  <FirebaseContext.Provider value={{FieldValue,firebase}}>
     <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

