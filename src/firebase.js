// import firebase from "firebase";
// import "firebase/firestore";
import { firebase } from "@firebase/app";
import "@firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDgna10tNG6TSLYN8SvqhWzTD6YfyGKOWo",
    authDomain: "todo-app-bs.firebaseapp.com",
    projectId: "todo-app-bs",
    // databaseURL: "https://todo-app-bs.firebaseio.com",
    storageBucket: "todo-app-bs.appspot.com",
    messagingSenderId: "45972763596",
    appId: "1:45972763596:web:309d20a45d0048ea606369"
  });
}

const db = firebase.firestore();

export { db };
