import { app } from './firebase.js';
import { getFirestore, collection, addDoc, doc, setDoc, Timestamp} from 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';

export const db = getFirestore(app);