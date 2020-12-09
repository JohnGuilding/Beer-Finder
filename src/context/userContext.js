import React, { createContext, useState, useEffect } from "react";
import firebase, { provider } from "./../firebase";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    const signIn = () => {
        firebase.auth().signInWithRedirect(provider);
    };
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            setUser(null);
        });
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
