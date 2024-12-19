import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZtgzyamJxB5gUTL1ANZVtJQgLUM-smT8",
    authDomain: "hackathon-7d982.firebaseapp.com",
    projectId: "hackathon-7d982",
    storageBucket: "hackathon-7d982.firebasestorage.app",
    messagingSenderId: "714034871005",
    appId: "1:714034871005:web:a9191e4f82bce96c2b7934"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

