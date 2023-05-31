import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import { getAuth, signInAnonymously, User } from "firebase/auth";

type AuthContextValues = {
  getUser: () => User;
}

export const AuthContext = createContext<AuthContextValues>({
  getUser: () => {
    throw new Error("AuthContext is not initialized");
  },
});

export const AnonymousAuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    (async () => {
      if (!user) {
        setIsLoading(true);
        await signInAnonymously(auth);
      }
    })();
  }, [auth, user]);

  const getUser = () => {
    if (!user) {
      throw new Error("Login is in progress");
    }
    return user;
  }

  const context: AuthContextValues = { getUser };

  return (
    <AuthContext.Provider value={context}>
      {isLoading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
}
