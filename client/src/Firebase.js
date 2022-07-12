// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { config } from "dotenv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeA1oMNSMqC1LHVkv84RB2EEWmI5JZZSc",
  authDomain: "cf-knockout.firebaseapp.com",
  projectId: "cf-knockout",
  storageBucket: "cf-knockout.appspot.com",
  messagingSenderId: "136734052175",
  appId: "1:136734052175:web:8a4b989c4884f05e197f3a",
  measurementId: "G-B3BL46YGJJ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;
//const analytics = getAnalytics(app);
