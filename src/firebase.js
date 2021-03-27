import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8-9GWlbpo9jAcRJr0SJ_TXiz2AFBiXsw",
  authDomain: "facebookmessclone.firebaseapp.com",
  projectId: "facebookmessclone",
  storageBucket: "facebookmessclone.appspot.com",
  messagingSenderId: "440873393366",
  appId: "1:440873393366:web:ab8c5c4bea39aefc1bfd77",
  measurementId: "G-LKP6CRYRBP"
});
const db = firebaseApp.firestore();
export default db;