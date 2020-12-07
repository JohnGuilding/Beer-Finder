import firebase from 'firebase/app';
import 'firebase/firestore';
// import "firebase/storage";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgtnGrarz95gbutY4FkW3loFhmi0RMo80",
    authDomain: "beer-app-bcb22.firebaseapp.com",
    databaseURL: "https://beer-app-bcb22.firebaseio.com",
    projectId: "beer-app-bcb22",
    storageBucket: "beer-app-bcb22.appspot.com",
    messagingSenderId: "54497329499",
    appId: "1:54497329499:web:af634e922ecc845de99a7e",
    measurementId: "G-GCE98JPT9B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;

