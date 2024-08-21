// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlvouaYCgZ7amFon2qEEw_axzHOF0seFA",
  authDomain: "shoki-bricklayer.firebaseapp.com",
  projectId: "shoki-bricklayer",
  storageBucket: "shoki-bricklayer.appspot.com",
  messagingSenderId: "87002432868",
  appId: "1:87002432868:web:ba70418ed9665e02116671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
