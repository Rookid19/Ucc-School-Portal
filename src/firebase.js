import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3xFUCmxy2eEjYbrIB9-e1R2uMmTpgyPk",
  authDomain: "paysfintechapp.firebaseapp.com",
  projectId: "paysfintechapp",
  storageBucket: "paysfintechapp.appspot.com",
  messagingSenderId: "403273464397",
  appId: "1:403273464397:web:9f94806906d0c040933a04",
  measurementId: "G-NDG2PZL617",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
