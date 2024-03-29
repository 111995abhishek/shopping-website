import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import    firebaseConfig   from './config.js';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//sign in with google
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>{auth.signInWithPopup(googleProvider)}

// export default signInWithGoogle;