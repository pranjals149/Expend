import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7AZB6jcydyEIPjSJ88ZxN9CLNfhlFq7o",
  authDomain: "expend-ed499.firebaseapp.com",
  databaseURL: "https://expend-ed499.firebaseio.com",
  projectId: "expend-ed499",
  storageBucket: "expend-ed499.appspot.com",
  messagingSenderId: "875340865471",
  appId: "1:875340865471:web:0e4fa38ab77a5776c8cb0a",
  measurementId: "G-FM049RV9L8"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };