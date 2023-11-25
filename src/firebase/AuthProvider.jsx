import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.config";
export const AuthContext = createContext(null);
import axios from "axios";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth , provider);
  }

  const logOut = () => {
    setLoading(true);
    axios.post("http://localhost:5000/logout", null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        const signedUser = { email: user.email };
        axios
          .post("http://localhost:5000/jwt", signedUser)
          .catch((error) => {
            console.error("Error setting JWT_TOKEN:", error);
          });
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    auth,
    user,
    loading,
    signIn,
    logOut,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
