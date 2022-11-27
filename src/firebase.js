import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfY_KvD2nh6ytDA2YGNLYKFzv1-fRyQn4",
  authDomain: "ucc-portal-69d8e.firebaseapp.com",
  projectId: "ucc-portal-69d8e",
  storageBucket: "ucc-portal-69d8e.appspot.com",
  messagingSenderId: "933968718388",
  appId: "1:933968718388:web:4cc76b5150226fda723861",
  measurementId: "G-39EMFEQKN5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
