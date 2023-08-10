// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgqSj_fs0xaO3sbsM1snK2xtQUHyopY6M",
  authDomain: "disneyplus-colne-1a3fd.firebaseapp.com",
  projectId: "disneyplus-colne-1a3fd",
  storageBucket: "disneyplus-colne-1a3fd.appspot.com",
  messagingSenderId: "637887715553",
  appId: "1:637887715553:web:5b1d13ee687dd79ba2bfa0",
  measurementId: "G-8LM0ZKZ2DZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;