import React, { createContext } from "react";
import { useEffect } from "react";
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

    const addToFavourites = () => {
        firestore
            .collection("favourites")
            .doc()
            .set()
            .then(getFavourites)
            .ctahc((err) => console.log(err));
    };

    const removeFromFavourites = () => {
        const query = firestore
            .collection("favourites")
            .where("id", "==", recipe.id)
            .where("uid", "==", userContext.user.uid);

        query.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => doc.ref.delete());
            fetchCookbook();
        });
    };

    useEffect(() => {
        getFavourites();
    }, []);

    return (
        <CrudContext.Provider
            value={{ getFavourites, addToFavourites, RemoveFromFavourites }}
        >
            {props.children}
        </CrudContext.Provider>
    );
};
