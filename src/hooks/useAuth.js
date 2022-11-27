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
import React, { createContext, useContext, useMemo, useState } from "react";
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
                setUserInfo([{ data: { indexNumber } }]);
                // navigate("/dashboard");

                const setUpRecaptcha = () => {
                  window.recaptchaVerifier = new RecaptchaVerifier(
                    "recaptcha-container",
                    {
                      size: "invisible",
                      callback: (response) => {
                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                        console.log("recaptach resolved");
                        onSignInSubmit();
                      },
                    },
                    auth
                  );
                };

                const onSignInSubmit = (event) => {
                  event.preventDefault();
                  setUpRecaptcha();
                  const phoneNumber = "+233240727345";
                  const appVerifier = window.recaptchaVerifier;

                  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                    .then((confirmationResult) => {
                      // SMS sent. Prompt user to type the code from the message, then sign the
                      // user in with confirmationResult.confirm(code).
                      window.confirmationResult = confirmationResult;
                      console.log(
                        "confirmationResult ----> " +
                          JSON.stringify(confirmationResult)
                      );
                      // ...
                    })
                    .catch((error) => {
                      alert(error);
                      console.log("Invalid Otp verification code");
                      // Error; SMS not sent
                      // ...
                    });
                };

                // calling recaptha function
                setUpRecaptcha()
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
    console.log("count----> " + querySnapshotCount.data().count);
    if (querySnapshotCount.data().count > 0) {
      setUserInfo(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      navigate("/dashboard");
    } else {
      alert("Wrong combination of index number and password");
    }
    setLoading("Submit");
  };

  // allows you to memoize expensive functions so that you can avoid calling them on every render
  const memoVaue = useMemo(
    () => ({
      userInfo,
      signup,
      signout,
      signin,
    }),
    [userInfo, signup, signout, signin]
  );

  return (
    <AuthContext.Provider value={memoVaue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
