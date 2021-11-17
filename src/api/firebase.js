import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

import firebaseConfig from '../config/config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(provider);
}


export function signOut() {
  return firebase.auth().signOut();
}

