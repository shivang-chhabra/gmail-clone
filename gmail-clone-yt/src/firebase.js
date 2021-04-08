import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBu9O4EcAxjoandh5x9vDOXiEsX9IbmCAY",
    authDomain: "clone-yt-6ed52.firebaseapp.com",
    projectId: "clone-yt-6ed52",
    storageBucket: "clone-yt-6ed52.appspot.com",
    messagingSenderId: "515149451635",
    appId: "1:515149451635:web:4b700323fc630a5cb37506",
    measurementId: "G-6ZPLF4LG7H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export  {firebaseApp,db,auth,provider} ; 
  