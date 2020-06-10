import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyAMkrqqp_LtZOEzYUImyuZiEHgaxkS4y9Y",
    authDomain: "vue-todo-c97f6.firebaseapp.com",
    databaseURL: "https://vue-todo-c97f6.firebaseio.com",
    projectId: "vue-todo-c97f6",
    storageBucket: "vue-todo-c97f6.appspot.com",
    messagingSenderId: "1060418056892",
    appId: "1:1060418056892:web:3b950c4f0fcd66a84516b9",
  })
  .database();
