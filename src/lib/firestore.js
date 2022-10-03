import {
  getFirestore, collection, addDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { app } from './firebase.js';

export const db = getFirestore(app);

export const postCollection = async (postValue, user) => {
  try {
    const docRef = await addDoc(collection(db, 'postCollection'), {
      post: postValue,
      user: user.email,
    });
    console.log(docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

/* setDoc(doc(db, 'postCollection', ''), {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
}); */
