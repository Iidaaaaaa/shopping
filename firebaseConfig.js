import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvl0QM7i4v-gVeBmyZrf-2CwNfMOHghog",
  authDomain: "shopping-street-c3190.firebaseapp.com",
  projectId: "shopping-street-c3190",
  storageBucket: "shopping-street-c3190.appspot.com",
  messagingSenderId: "778005216985",
  appId: "1:778005216985:web:e2480364cf962b126f48c8",
  measurementId: "G-TNRXH4YN9Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  provider,
  signInWithPopup,
  signInWithRedirect,
  db,
  doc,
  getDoc,
  setDoc,
  collection,
  updateDoc,
  getDocs,
  storage,
};
