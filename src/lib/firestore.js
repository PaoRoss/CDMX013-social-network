import {
  getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, limit, doc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './firebase.js';

export const db = getFirestore(app);

export const postCollection = async (postValue, user) => {
  try {
    const docRef = await addDoc(collection(db, 'postCollection'), {
      post: postValue,
      user: user.email,
      time: serverTimestamp(),
    });
    console.log(docRef.id);
    let docId= docRef.id;
    return docId;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// export const onRealTime = (data) => onSnapshot(collection(db, 'postCollection'), (data)); -- Versión que no tiene query
const q = query(collection(db, 'postCollection'), orderBy('time', 'desc'), limit(10));
export const onRealTime = (callback) => onSnapshot(q, callback);
