// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq_b6DLX5MpzipJOad3MH5EWzEQX0IeDM",
  authDomain: "nico-71f12.firebaseapp.com",
  projectId: "nico-71f12",
  storageBucket: "nico-71f12.appspot.com",
  messagingSenderId: "349442052494",
  appId: "1:349442052494:web:bd23c3117f2c3a549854df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)