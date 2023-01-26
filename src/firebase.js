import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC64zytwvl1ariKH3mbcCGUwXJJbeTRQjg",
  authDomain: "otp-auth-cb340.firebaseapp.com",
  projectId: "otp-auth-cb340",
  storageBucket: "otp-auth-cb340.appspot.com",
  messagingSenderId: "347499779458",
  appId: "1:347499779458:web:1b6b971ae01e048b5cab9b",
  measurementId: "G-0HEJVKEWE9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
