import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  browserPopupRedirectResolver,
  browserSessionPersistence,
  getAuth,
  initializeAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeOcOfeVkhO4hP363KgBdUJ70_C1igfPs",
  authDomain: "ucc-portal-2b7ba.firebaseapp.com",
  projectId: "ucc-portal-2b7ba",
  storageBucket: "ucc-portal-2b7ba.appspot.com",
  messagingSenderId: "908887399115",
  appId: "1:908887399115:web:b0c8ceb81518a66427994e",
  measurementId: "G-NTQQK0H51N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
