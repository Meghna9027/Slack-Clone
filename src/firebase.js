import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwJmBEwIxFSjX8Ap6AYyV38JZ3Xob3iG0",
    authDomain: "slack-538a1.firebaseapp.com",
    projectId: "slack-538a1",
    storageBucket: "slack-538a1.appspot.com",
    messagingSenderId: "836496057897",
    appId: "1:836496057897:web:4970b1009e023765e05e38",
    measurementId: "G-DEM8H5YJ4Y"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;