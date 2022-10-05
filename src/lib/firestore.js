import {
  getFirestore, collection, addDoc, onSnapshot, doc
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
    let docId= docRef.id;
    return docId;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

/*export const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
  console.log("Current data: ", doc.data());
});*/  


/* setDoc(doc(db, 'postCollection', ''), {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
}); */
