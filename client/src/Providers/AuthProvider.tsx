import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

//! interfaces

interface AuthInfo {
  loading: boolean;
  createUser: (email: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
  updateUser: (name: string, photo: string) => void;
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthInfo | null>(null);

const auth = getAuth(app);

const AuthProvider: FC<AuthProviderProps> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  //? create user with email and password

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ?  sign in user with email and password

  const signInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //? sign out current user

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //? update current user

  const updateUser = (name: string, photo: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    }
  };

  //? onAuthStateChanged

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    createUser,
    signInUser,
    signOutUser,
    updateUser,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
