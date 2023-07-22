import { getApp, getApps, initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC3EM-GMcPGualYaxaI7gdcviHAzUnnepw',
  authDomain: 'renz-ng.firebaseapp.com',
  projectId: 'renz-ng',
  storageBucket: 'renz-ng.appspot.com',
  messagingSenderId: '662591846722',
  appId: '1:662591846722:web:faa0e63d8ac456471a70db',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
