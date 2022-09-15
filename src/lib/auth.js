import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './firebase.js';

export const auth = getAuth(app);

export const register = (emailValue, passwordValue) => createUserWithEmailAndPassword(auth, emailValue, passwordValue);
