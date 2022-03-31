import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC6T_03tMJ6PVRn7uj0S4ga8QR-oI8uOEQ",

    authDomain: "userlist-6ba45.firebaseapp.com",

    projectId: "userlist-6ba45",

    storageBucket: "userlist-6ba45.appspot.com",

    messagingSenderId: "741499940344",

    appId: "1:741499940344:web:9c98aaff9566004af1fa0d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
