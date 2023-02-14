import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
const firebaseconfig ={
    apiKey: "AIzaSyCDCB0-Wqi6wBQ5hA7XwXhIRO1Qi764udo",
    authDomain: "react-demo-7fab7.firebaseapp.com",
    projectId: "react-demo-7fab7",
    storageBucket: "react-demo-7fab7.appspot.com",
    messagingSenderId: "260904793337",
    appId: "1:260904793337:web:0bcc10ae4349fbbc645e28"

};
firebase.initializeApp(firebaseconfig);
export const database = firebase.database().ref("/notes");

export const googleProvider = new firebase.auth.GoogleAuthProvider();