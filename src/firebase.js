import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyA598qem9SAl_YCJMozaxpZ0OLtVS6BTVE",
    authDomain: "project-2ef91.firebaseapp.com",
    projectId: "project-2ef91",
    storageBucket: "project-2ef91.appspot.com",
    messagingSenderId: "365503421270",
    appId: "1:365503421270:web:c2dede8fcf771d8451d4f7",
    measurementId: "G-4GLX82VXVR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};