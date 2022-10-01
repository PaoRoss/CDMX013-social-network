import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

import { app } from './firebase.js';
import { onNavigate } from '../main.js';

export const auth = getAuth(app);

export const createAccount = (emailValue, passwordValue) => createUserWithEmailAndPassword(auth, emailValue, passwordValue);

export const signIn = (emailValue, passwordValue) => signInWithEmailAndPassword(auth, emailValue, passwordValue);

export const provider = new GoogleAuthProvider();
export const verifyWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export const getUserState = () => onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const email = user.email;
    console.log(`El usuario ${uid}se encuentra activo`);
    console.log(user);
    console.log(email);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('No hay usuarios activos');
  }
});

export const endSesion = () => signOut(auth)
  .then(() => {
    onNavigate('/');
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
