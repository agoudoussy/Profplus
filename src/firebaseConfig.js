// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBH20Q7q43R93uINuaudDDO5xtcIuKD6yk",
  authDomain: "atelier-solidaire-projet.firebaseapp.com",
  databaseURL: "https://atelier-solidaire-projet-default-rtdb.firebaseio.com",
  projectId: "atelier-solidaire-projet",
  storageBucket: "atelier-solidaire-projet.appspot.com",
  messagingSenderId: "75550955386",
  appId: "1:75550955386:web:de95b366be0a5ef2de68c3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db =firebase.firestore();

export { db, storage };