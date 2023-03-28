import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCyTyONwTHn_BxvgSAIRYtBIJInaB5r18M",
  authDomain: "linkedin-clone-d1e54.firebaseapp.com",
  projectId: "linkedin-clone-d1e54",
  storageBucket: "linkedin-clone-d1e54.appspot.com",
  messagingSenderId: "141619536256",
  appId: "1:141619536256:web:cd6da6ac060d0d07e8e165"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}