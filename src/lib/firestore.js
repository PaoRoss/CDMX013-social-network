import {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from '../firebase.js';

export const db = getFirestore(app);

export const savePost = (post, user) => addDoc(collection(db, 'postCollection'), { post, user });
export const getPost = () => getDocs(collection(db, 'postCollection'));
