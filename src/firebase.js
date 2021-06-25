import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWKYK1dY49oRW3EZyPamXZ-SPYL9tTl9E",
    authDomain: "clone-c4f41.firebaseapp.com",
    projectId: "clone-c4f41",
    storageBucket: "clone-c4f41.appspot.com",
    messagingSenderId: "930089502319",
    appId: "1:930089502319:web:c5db840b4208cd5c64ef9a",
    measurementId: "G-0XDVSXSXGV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
