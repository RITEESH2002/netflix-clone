import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGT7qdhkUcfrVI6B-gPWn-1aBc1HEjpU0",
  authDomain: "netflix-clone-efd63.firebaseapp.com",
  projectId: "netflix-clone-efd63",
  storageBucket: "netflix-clone-efd63.appspot.com",
  messagingSenderId: "1043655359170",
  appId: "1:1043655359170:web:6ebed010b2a30b0886595b",
  measurementId: "G-CVZEJS0Y4R"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {auth}
export default db;

