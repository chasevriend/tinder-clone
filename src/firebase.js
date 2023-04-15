import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPskggZsmNNq0Mx8YZSG5pFCGVe9RQ6Wk",
  authDomain: "tinder-clone-b473c.firebaseapp.com",
  projectId: "tinder-clone-b473c",
  storageBucket: "tinder-clone-b473c.appspot.com",
  messagingSenderId: "461490209499",
  appId: "1:461490209499:web:a7fb6c75a60b39b6dfc2fe",
  measurementId: "G-DML0G6HMBS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;