/** @format */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase/firebase.config";

// creating authContext
export const authContext = createContext();
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  // creating google provider
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email and password
  const EPSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user with email and password
  const EPLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // all user signOUT
  const SignOUT = () => {
    setLoading(true);

    return signOut(auth);
  };
  // google login
  const SignInWithG = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };
  //  Updating user profile
  const UpdateUserProfile = () => {
    setLoading(true);
    return updateProfile(auth.currentUser);
  };

  // observer (on change of auth of user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user is:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // sharing information
  const authInfo = {
    user,
    loading,
    EPSignUp,
    EPLogin,
    SignOUT,
    SignInWithG,
    UpdateUserProfile,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default ContextProvider;
