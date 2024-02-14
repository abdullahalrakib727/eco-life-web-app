import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

//* interfaces
interface AuthInfo {
  loading: boolean;
  error: string;
  createUser: (email: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
  updateUser: (name: string, photo: string) => void;
  googleSignIn: () => void;
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

// ? default auth info

const defaultAuthInfo: AuthInfo = {
  loading: false,
  error: "",
  user: null,
  createUser: () => {},
  signInUser: () => {},
  signOutUser: () => {},
  updateUser: () => {},
  googleSignIn: () => {},
};

// ? create context

export const AuthContext = createContext<AuthInfo>(defaultAuthInfo);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const AuthProvider: FC<AuthProviderProps> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  //? create user with email and password

  const createUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoading(true);
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };

  // ?  sign in user with email and password

  const signInUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };

  //? sign out current user

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      setLoading(true);
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };

  //? update current user

  const updateUser = async (name: string, photo: string) => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
    }
  };

  // sign in with google

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      }
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
    error,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
