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
    console.log("inside Function epsignup:", loading);
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user with email and password
  const EPLogin = (email, password) => {
    setLoading(true);
    console.log("inside Function eplogin:", loading);
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  // all user signOUT
  const SignOUT = () => {
    setLoading(true);
    console.log("inside Function signout:", loading);
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    localStorage.removeItem("smDB-token");
    return signOut(auth);
  };
  // google login
  const SignInWithG = () => {
    setLoading(true);
    console.log("inside Function gllesingin:", loading);
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }

    return signInWithPopup(auth, googleProvider);
  };
  //  Updating user profile
  const UpdateUserProfile = (profile) => {
    setLoading(true);
    console.log("inside Function update:", loading);
    if (loading) {
      return <button className="btn btn-square loading p-10"></button>;
    }
    return updateProfile(auth.currentUser, profile);
  };

  // observer (on change of auth of user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user is:", currentUser);
      setUser(currentUser);
      setLoading(false);
      // console.log("after user created", loading);
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
