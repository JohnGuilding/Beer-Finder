import React, { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "./../firebase";
import { UserContext } from "./userContext";

export const CrudContext = createContext({});

export const CrudProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const userContext = useContext(UserContext);

    const getFavourites = () => {
        if (userContext.user) {
            firestore
                .collection("favourites")
                .get()
                .then((querySnapshot) => {
                    const favourites = querySnapshot.docs
                        .filter(
                            (doc) => doc.data().uid === userContext.user.uid
                        )
                        .map((doc) => doc.data());
                    setFavourites(favourites);
                })
                .catch((err) => console.log(err));
        }
    };

    const addToFavourites = (beer) => {
        firestore
            .collection("favourites")
            .doc()
            .set({
                ...beer, 
                uid: userContext.user.uid
            })
            .then(getFavourites)
            .catch((err) => console.log(err));
    };

    const removeFromFavourites = (beer) => {
        const query = firestore
            .collection("favourites")
            .where("id", "==", beer.id)
            .where("uid", "==", userContext.user.uid);

        query.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => doc.ref.delete());
            getFavourites();
        });
    };

    const toggleFav = (beer) => {
        if (userContext.user) {
            beer.isFav = !beer.isFav;
            beer.isFav ? addToFavourites(beer) : removeFromFavourites(beer);
        } else {
            alert('you must be logged in to edit your favourites');
        }
    }

    useEffect(() => {
        getFavourites();
    }, []);

    return (
        <CrudContext.Provider value={{ favourites, toggleFav, addToFavourites }}>
            {props.children}
        </CrudContext.Provider>
    );
};
