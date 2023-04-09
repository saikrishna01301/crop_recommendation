import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  userSignOut,
  createUserDocumentFromAuth,
} from "../utils/firebase";

//actual value you want to access
export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // userSignOut();
  useEffect(() => {
    //it automatically unsubscribe from observer
    return onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      
      setCurrentUser(user);
    });
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
