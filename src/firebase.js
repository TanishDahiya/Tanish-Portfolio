import firebase from "firebase";


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtJM4lIkeVpIvHDgIYkAv_SwQqapK1UaI",
    authDomain: "portfolio-tanish.firebaseapp.com",
    databaseURL: "https://portfolio-tanish.firebaseio.com",
    projectId: "portfolio-tanish",
    storageBucket: "portfolio-tanish.appspot.com",
    messagingSenderId: "613443428948",
    appId: "1:613443428948:web:7141e9811834339f9103c1"
});

var db = firebaseApp.firestore();

export { db };