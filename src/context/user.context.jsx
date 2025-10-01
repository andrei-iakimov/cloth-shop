import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    //signOutUser();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => 
        { 
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log('User state changed:', user);
        });
        return unsubscribe;
    }, []);
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};