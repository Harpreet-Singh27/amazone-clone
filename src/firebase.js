// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDyZhNaP5CBCMw_AHyJfzyjYcVcCUqyNXw',
  authDomain: 'challenge-8a868.firebaseapp.com',
  projectId: 'challenge-8a868',
  storageBucket: 'challenge-8a868.appspot.com',
  messagingSenderId: '141214452172',
  appId: '1:141214452172:web:4ed282c7bcbfe17fd8f569',
  measurementId: 'G-70XPS8PXF6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
