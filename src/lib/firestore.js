import {
  getFirestore, collection, addDoc, onSnapshot, query, orderBy, limit
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './firebase.js';

export const db = getFirestore(app);

export const postCollection = async (postValue, user) => {
  try {
    const docRef = await addDoc(collection(db, 'postCollection'), {
      post: postValue,
      user: user.email,
    });
    console.log(docRef.id);
    const docId = docRef.id;
    return docId;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
export const orderPosts = query(collection(db, 'postCollection'), orderBy('time', 'dec'));

export const onRealTime = (data) => onSnapshot(collection(db, 'postCollection'), (data));

/* setDoc(doc(db, 'postCollection', ''), {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
}); */
