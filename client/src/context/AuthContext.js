import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import auth from "../Firebase";
//import { getAuth } from "firebase/auth";
// const auth = firebase.auth();

const AuthContext = React.createContext();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signInWithGoogle() {
    return auth.signInWithPopup(googleProvider);
  }

  function logOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unmount = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unmount;
  }, []);

  let value = {
    user,
    signUp,
    logIn,
    logOut,
    signInWithGoogle,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
