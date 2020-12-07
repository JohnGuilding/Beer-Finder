import React, { createContext } from "react";
import { firestore } from "./../firebase";
import { UserContext } from "./userContext";

export const CrudContext = createContext({});

export const CrudProvider = () => {
    const userContext = useContext(UserContext);

      // const addToFavourites = () => {
  //   firestore
  //     .collection('favourites')
  //     .doc()
  //     .set()

  // }

    return (
        <CrudContext.Provider value={{}} >
            {props.children}
        </CrudContext.Provider>
    );
}