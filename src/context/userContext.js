import React, { createContext, useEffect } from "react";
import firebase, { provider } from "./../firebase";

export const UserContext = createContext({});

export const UserProvider = () => {
    const [user, setUser] = useState(null);

    // SIGN IN/OUT //
    const signIn = () => {
        firebase.auth().signInWithRedirect(provider);
    };
    const signOut = () => {
        firebase.auth().signOut();
    };

    const getUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, signIn, signOut }}>
            {props.children}
        </UserContext.Provider>
    );
};
