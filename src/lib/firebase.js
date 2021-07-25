import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket:  process.env.REACT_APP_storageBucket,
    messagingSenderId:  process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };


const firebase = Firebase.initializeApp(firebaseConfig)
const {FieldValue} = Firebase.firestore;

export { firebase,FieldValue}