import {
  addDoc,
  collection,
  doc,
  getCountFromServer,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { db } from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //sign up
  const signup = async (indexNumber, password, phone, setLoading) => {
    if (indexNumber !== "" && password !== "" && phone !== "") {
      try {
        setLoading("Loading....");
        const q = query(
          collection(db, "User",indexNumber.toLowerCase()),
          where("indexNumber", "==", indexNumber.trim())
        );
        const querySnapshot = await getCountFromServer(q);
        if (querySnapshot.data().count > 0) {
          alert("User already exists");
        } else {
          alert("No user");

          try {
            await setDoc(doc(db, "User", indexNumber.toLowerCase() + "/info"), {
              indexNumber,
              password,
              phone,
              timestamp: serverTimestamp(),
            })
              .then(() => alert("Account created succesfully"))
              .catch((error) => alert(error));
          } catch (error) {
            alert(error);
          }
        }
      } catch (error) {
        alert(error);
      }
      setLoading("Submit");
    } else {
      alert("All input are required");
      setLoading("Submit");
    }
  };

  //   useEffect(() => {
  //     console.log("data---> " + data.length);
  //   }, [data]);

  // allows you to memoize expensive functions so that you can avoid calling them on every render
  const memoVaue = useMemo(
    () => ({
      user: "ama",
      signup,
    }),
    []
  );

  return (
    <AuthContext.Provider value={memoVaue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
