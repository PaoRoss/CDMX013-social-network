import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from '../firebase.js';

export const auth = getAuth(app);

export const createAccount = (emailValue, passwordValue) => createUserWithEmailAndPassword(auth, emailValue, passwordValue);

// export const signIn = (emailValue,passwordValue) =>
// signInWithEmailAndPassword(auth, emailValue, passwordValue);
