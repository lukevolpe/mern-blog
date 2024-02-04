// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-4543c.firebaseapp.com',
  projectId: 'mern-4543c',
  storageBucket: 'mern-4543c.appspot.com',
  messagingSenderId: '199769763992',
  appId: '1:199769763992:web:1c53ef36ad1e81e10520ed',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
