import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nico-71f12.firebaseapp.com",
  projectId: "nico-71f12",
  storageBucket: "nico-71f12.appspot.com",
  messagingSenderId: "349442052494",
  appId: "1:349442052494:web:bd23c3117f2c3a549854df"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)