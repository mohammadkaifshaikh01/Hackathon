// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZtgzyamJxB5gUTL1ANZVtJQgLUM-smT8",
  authDomain: "hackathon-7d982.firebaseapp.com",
  projectId: "hackathon-7d982",
  storageBucket: "hackathon-7d982.firebasestorage.app",
  messagingSenderId: "714034871005",
  appId: "1:714034871005:web:a9191e4f82bce96c2b7934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

