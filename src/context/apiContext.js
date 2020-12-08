import React, { createContext, useState, useEffect } from "react";

export const ApiContext = createContext({});

export const ApiProvider = (props) => {

    // state
    const [beers, setBeers] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);

    // helper functions

    const cleanBeerData = (beer) => {
        const cleanedBeer = {
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            image: beer.image_url,
            abv: beer.abv,
            foodPairing: beer.food_pairing,
            isFav: false,
        };
        return cleanedBeer;
    };

    // SEARCH BEERS //
    const fetchBeers = (searchTerm) => {
        const url = searchTerm
            ? `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
            : "https://api.punkapi.com/v2/beers";
        fetch(url)
            .then((response) => response.json())
            .then((searchData) => {
                const cleanBeers = searchData.map(cleanBeerData);
                setBeers(cleanBeers);
            })
            .catch((err) => console.log(err));
    };

    const fetchRandomBeer = () => {
        fetch("https://api.punkapi.com/v2/beers/random")
            .then((response) => response.json())
            .then((data) => {
                setModalInfo(data[0]);
            });
    };

        // hooks
        useEffect(() => {
            fetchBeers();
        }, []);

    return (
        <ApiContext.Provider value={{ beers, fetchBeers, fetchRandomBeer, modalInfo, modal, setModal }}>
            {props.children}
        </ApiContext.Provider>
    )
}
