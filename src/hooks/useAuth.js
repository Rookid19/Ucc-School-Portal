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
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);

  const navigate = useNavigate();

  //sign up
  const signup = async (indexNumber, password, phone, setLoading) => {
    if (indexNumber !== "" && password !== "" && phone !== "") {
      try {
        setLoading("Loading....");
        const q = query(
          collection(db, "User", indexNumber.toLowerCase()),
          where("indexNumber", "==", indexNumber.trim())
        );
        const querySnapshot = await getCountFromServer(q);
        if (querySnapshot.data().count > 0) {
          alert("User already exists");
        } else {
          try {
            await setDoc(doc(db, "User", indexNumber.toLowerCase() + "/info"), {
              indexNumber,
              password,
              phone,
              timestamp: serverTimestamp(),
            })
              .then(() => {
                // alert("Account created succesfully");
                setUserInfo([{ indexNumber }]);
                navigate("/dashboard");
              })
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

  //sign out
  const signout = () => {
    setUserInfo();
    navigate("/");
  };

  //signin
  const signin = async (indexNumber, password, setLoading) => {
    setLoading("Loading....");
    const q = query(
      collection(db, "User", indexNumber.toLowerCase()),
      where("indexNumber", "==", indexNumber.trim()),
      where("password", "==", password.trim())
    );

    const querySnapshotCount = await getCountFromServer(q);
    const querySnapshot = await getDocs(q);

    if (querySnapshotCount.data().count > 0) {
      setUserInfo(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      navigate("/dashboard")
    } else {
      alert("User does not exists");
    }
  };

  // allows you to memoize expensive functions so that you can avoid calling them on every render
  const memoVaue = useMemo(
    () => ({
      userInfo,
      signup,
      signout,
      signin
    }),
    [userInfo]
  );

  return (
    <AuthContext.Provider value={memoVaue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
