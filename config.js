import firebase from 'firebase';
require("@firebase/firestore")
// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAg3t1s2I40VvyE6afRUMDo9Aogy-Q2bAA",
    authDomain: "bedtime-database.firebaseapp.com",
    databaseURL: "https://bedtime-database.firebaseio.com",
    projectId: "bedtime-database",
    storageBucket: "bedtime-database.appspot.com",
    messagingSenderId: "291956203097",
    appId: "1:291956203097:web:db1f8be063803d13749b48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
