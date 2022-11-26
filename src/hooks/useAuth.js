import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { createContext, useContext, useMemo } from "react";
import { db } from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //sign up
  const signup = async () => {
    await addDoc(collection(db, "User", "df", "Info"), {
      timestamp: serverTimestamp(),
    });
  };

  // allows you to memoize expensive functions so that you can avoid calling them on every render
  const memoVaue = useMemo(
    () => ({
      user: "ama",
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
