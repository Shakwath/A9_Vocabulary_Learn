import React, { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../../Firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  const updateUser = (data) => updateProfile(auth.currentUser, data);

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    signIn,
    updateUser,
    logOut,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authData}>
      {loading ? <div>Loading…</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
